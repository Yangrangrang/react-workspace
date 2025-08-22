'use server';

import {signIn} from "@/auth";
import {AuthError} from "next-auth";
import {z} from 'zod';  // 검증
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import postgres from "postgres";
import exp from "node:constants";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string({
        invalid_type_error: 'Please select a customer',
    }),
    amount: z.coerce
        .number()
        .gt(0, {message: 'Please enter an amount greater than $0'}),
    status: z.enum(['pending', 'paid'],{
        invalid_type_error: 'Please select an invoice status',
    }),
    date: z.string(),
})

const CreateInvoice = FormSchema.omit({id: true, date: true});
const UpdateInvoice = FormSchema.omit({id: true, date: true});

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
}

export async function createInvoice(prevState:State, formData: FormData) {
    const validatedFileds = CreateInvoice.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFileds.success) {
        return {
            errors: validatedFileds.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        }
    }
    const {customerId, amount, status} = validatedFileds.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD" 형식

    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date});
    `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }

    revalidatePath('/dashboard/invoices');
    //  데이터를 업데이트하고 있으므로 이 캐시를 지우고 서버에 새 요청을 보내야 합니다.
    redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
    const {customerId, amount, status} = UpdateInvoice.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });
    const amountInCents = amount * 100;

    try {
        await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
    throw new Error('Failed to Delete Invoice');

    await sql`
        DELETE
        FROM invoices
        WHERE id = ${id};
    `;
    revalidatePath('/dashboard/invoices');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return 'Invalid credentials';
                default:
                    return 'Something went wrong';
            }
        }
        throw error;
    }
}
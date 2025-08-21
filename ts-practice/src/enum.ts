enum StarbuksGrade {
    WECOME,
    GREEN,
    GOLD
}

function getDiscound(v: StarbuksGrade) {
    switch (v) {
        case StarbuksGrade.WECOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscound(StarbuksGrade.GOLD));   // 10
console.log(StarbuksGrade.GOLD);    // 2 (enum 순서)


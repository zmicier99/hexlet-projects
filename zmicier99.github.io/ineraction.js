// Реализуйте тело функции smallestDivisor, используя итеративный процесс. Эта функция должна находить наименьший делитель заданного числа.

// Доп. условия: число, передаваемое в функцию, больше нуля; делитель должен быть больше единицы, за исключением случая, когда аргументом является единица (наименьшим делителем которой является также единица).

// Например, наименьший делитель числа 15 это 3.

// smallestDivisor(15); // 3
// smallestDivisor(17); // 17

const smallestDivisor = (num) => {

    // Visualize Execution: https://goo.gl/Mc68MA
    const iter = (acc) => {
        // We use 'num / 2' in the condition below, and not 'num'.
        // This is a simple optimization: a number cannot be divided
        // by a number larger than its half.
        if (acc > num / 2) {
            return num;
        }
        if (num % acc === 0) {
            return acc;
        }
        return iter(acc + 1);
    };

    return iter(2);
    // END
};

export default smallestDivisor;

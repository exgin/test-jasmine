describe('cal taxes tests', function () {
    it('should caluclate the high tax bracket', function () {
        expect(calTaxes(50000)).toEqual(12500);
        expect(calTaxes(100000)).toEqual(25000);
    });
    
    it('should caluclate the low tax bracket', function () {
        expect(calTaxes(10000)).toEqual(1500);
        expect(calTaxes(0)).toEqual(0);
        expect(calTaxes(1000)).toEqual(150);
    });
    
    it('should reject invalid incomes', function () {
        // Must be wrapped within a fn when testing for an error
        expect(() => calTaxes('dddddd')).toThrowError();
        expect(() => calTaxes({})).toThrowError();
        expect(() => calTaxes([])).toThrowError();
    });
});

describe('removing duplicates in an array', function () {
    it('should remove duplicates form an array', function () {
        expect(removeDups([1,1,2,2,3,4])).toEqual([1,2,3,4]);
        expect(removeDups([1,2,3])).toEqual([1,2,3]);
        expect(removeDups([1,2,3])).toBeInstanceOf(Array);
    });
});

describe('submitForm() tests', function () {
    it('saves input val to usernames array', function () {
        nameInput.value = 'test';
        submitForm();
        expect(usernames.length).toBe(1); // combines with afterEach, since it'll keep resetting the array | array.length === 1
    });
});

// Resets all of our code, after each 'it' | AKA clean-up code
// Afters are good for cleaning up our code
afterEach(function () {
    nameInput.value = '';
    usernames = [];
    console.log('after');
});

afterAll(function () {
    console.log('I run once after EVERY test');
});

// Befores are good for simulating/ setting up our code
beforeEach(function () {
    console.log('before');
});

beforeAll(function () {
    console.log('I run once before EVERY test');
});

const Fizbuz = require('./Fizbuz');
test('เลข3ลงตัว',()=>{
    const fb= new Fizbuz();
    expect(fb.go(3)).toBe("fizz");
});
test('เลข3ลงตัว',()=>{
    const fb= new Fizbuz();
    expect(fb.go(33)).toBe("fizz");
});
test('เลข5',()=>{
    const fb= new Fizbuz();
    expect(fb.go(5)).toBe("buzz");
});
test('เลข5',()=>{
    const fb= new Fizbuz();
    expect(fb.go(45)).toBe("fizzbuzz");
});
test('เลข35',()=>{
    const fb= new Fizbuz();
    expect(parseInt(35/10)).toBe(3);
});
test('เลข35',()=>{
    const fb= new Fizbuz();
    expect(fb.go(35)).toBe("fizzbuzz");
});
test('เลข53',()=>{
    const fb= new Fizbuz();
    expect(fb.go(53)).toBe("fizzbuzz");
});
test('เลข52',()=>{
    const fb= new Fizbuz();
    expect(fb.go(52)).toBe("buzz");
});
test('เลข32',()=>{
    const fb= new Fizbuz();
    expect(fb.go(32)).toBe("fizz");
});
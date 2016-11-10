module('Calculator Test Suite', { setup: function () { initialize(); } });

test("Initialize Test", function () {

    expect(2);
    txtInput.value = '';
    txtResult.value = '';
    var expected = '0';
    QUnit.triggerEvent(btnMinus, "click");
    equal(txtResult.value, expected, 'Expected value: ' +
          expected + ' Actual value: ' + txtResult.value);
    equal(txtInput.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtInput.value);
});
test("Button Click Test", function () {
    var buttonQty = 10;
    expect(buttonQty * 2);
    for (i = 0; i < buttonQty; i++) {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + 'Actual value:' + result);
        var expectedLength = i < 2 ? 1 : i;
        equal(txtInput.value.length, expectedLength, 'Expected string length: ' +
            expectedLength + ' Actual value: ' + txtInput.value.length);
    }
});
test("Add Test", function () {
    
    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var result = txtInput.value[txtInput.value.length - 1];
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtResult.value);
    
});
test("Minus Test", function () {

    expect(1);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnMinus = document.getElementById('btnMinus');
    QUnit.triggerEvent(btnMinus, "click");
    var result = txtInput.value[txtInput.value.length - 1];
    var expected = '10';
    equal(txtResult.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtResult.value);

});
test("Clear Entry Test", function () {

    expect(1);
    txtInput.value = '10';
    var btnClearEntry = document.getElementById('btnClearEntry');
    QUnit.triggerEvent(btnClearEntry, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtInput.value);

});
test("Clear Test", function () {

    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnClear = document.getElementById('btnClear');
    QUnit.triggerEvent(btnClear, "click");
    var expected = '0';
    equal(txtInput.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtInput.value);
    equal(txtResult.value, expected, 'Expected value: ' +
           expected + ' Actual value: ' + txtResult.value);

});
test("Add Clear Test", function () {

    expect(2);
    txtInput.value = '10';
    txtResult.value = '20';
    var btnPlus = document.getElementById('btnPlus');
    QUnit.triggerEvent(btnPlus, "click");
    var expected = '30';
    equal(txtResult.value, expected, 'Expected value: ' +
          expected + ' Actual value: ' + txtResult.value);
    expected = 0;
    equal(txtInput.value, expected, 'Expected value: ' +
            expected + ' Actual value: ' + txtInput.value);
});
    test("Sub Clear Test", function () {

        expect(2);
        txtInput.value = '10';
        txtResult.value = '20';
        var btnMinus = document.getElementById('btnMinus');
        QUnit.triggerEvent(btnMinus, "click");
        var expected = '10';
        equal(txtResult.value, expected, 'Expected value: ' +
              expected + ' Actual value: ' + txtResult.value);
        expected = 0;
        equal(txtInput.value, expected, 'Expected value: ' +
                expected + ' Actual value: ' + txtInput.value);
});
    

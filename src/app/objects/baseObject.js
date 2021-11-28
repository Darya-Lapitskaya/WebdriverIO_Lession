
class BaseObject {

    isDisplayed(element) {
        return this[element].isDisplayed();
    }

    clickBy(elements, textOrPosition) {
        if (typeof textOrPosition === 'number') {
            this[elements][textOrPosition].click();
        } else {
            this[elements].find((el)=>{
                return el.getText().trim() === textOrPosition;
            }).click();
        }
    }

    click(element) {
        {
            this[element].click();
        }
    }

    getText(element){
        return element.getText()
    }
}

module.exports = BaseObject;
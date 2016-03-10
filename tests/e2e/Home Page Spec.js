describe('Home Page', function () {
    
    var selectInput;
                
    beforeAll(function (done) {
        return browser.get('http://localhost:8088')
            .then(function(){
                selectInput = element(by.id("select"));
                return true;
            })
            .then(done);
    });

    
    it('The select input should be present', function () {
        
        expect(selectInput.isPresent()).toBe(true);

    });
    
    it('The play button should be enabled after selecting an option', function () {
        expect(element(by.id('play')).isEnabled()).toBe(false);
        element(by.cssContainingText('option', 'Rock')).click().then(function(){
            expect(element(by.id('play')).isEnabled()).toBe(true);
        });

    });
    
});
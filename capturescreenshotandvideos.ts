describe('mysuite', ()=>
{
 it('capture ss and video', ()=>
{
    //intentionally captueing the screenshots
     cy.visit("https://www.opencart.com/index.php?route=cms/demo");
     cy.screenshot("homepage");//random name
     //specific element logo 
     cy.get("img[title='OpenCart - Open Source Shopping Cart Solution']").screenshot("logo");
})
})
@isTest
private class MyBooksTestClass {
    static testMethod void validateMyBooks() {
        Book__c b = new Book__c(Name='Behind the Cloud', Price__c=100);

        // Insert book
        insert b;

        // Retrieve the new book
        Book__c b2 = [SELECT Price__c FROM Book__c WHERE Id =: b.Id];

        // Confirm that the price has been updated correctly
        System.assertEquals(90, b2.Price__c);
    }
}
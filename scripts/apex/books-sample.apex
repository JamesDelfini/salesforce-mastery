// Creating list of Books
List<Book__c> bookList = new List<Book__c>();

// Creating Books
Book__c b1 = new Book__c(Name='Eiusmod deserunt sunt', Price__c=100);
Book__c b2 = new Book__c(Name='Incididunt ', Price__c=299.99);
Book__c b3 = new Book__c(Name='Excepteur adipisicing', Price__c=599.99);

// Adding Books to list  
bookList.add(b1);
bookList.add(b2);
bookList.add(b3);

// Insert books
insert bookList;
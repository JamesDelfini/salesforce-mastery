public with sharing class ContactController {
  public ContactController() {
  }

  @AuraEnabled(cacheable=true)
  public static List<Contact> getContacts() {
    return [
      SELECT Id, Name, Email, Phone
      FROM Contact
      WITH SECURITY_ENFORCED
      LIMIT 10
    ];
  }
}

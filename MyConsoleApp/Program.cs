using System;
using System.Linq;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk.Client;
using System.Security.AccessControl;



namespace MyConsoleApp
{
    public class Program
    {
        static void Main(string[] args)
        {
            try
            {
                // Authentication
                //string connectionString = "AuthType=Interactive; Url=https://orgd14b46ee.crm8.dynamics.com; Username=AnkitSaini@Pascalcase748.onmicrosoft.com; Password=PratitiBakshi@1234";

                string connectionString = "AuthType=Office365; Url=https://orgd14b46ee.crm8.dynamics.com; Username=AnkitSaini@Pascalcase748.onmicrosoft.com; Password=PratitiBakshi@1234";
                CrmServiceClient service = new CrmServiceClient(connectionString);

                // Check if service is null

                //string query = @"<fetch version='1.0' output-format='xml-platform' mapping='logical' savedqueryid='00000000-0000-0000-00aa-000010001003' no-lock='false' distinct='true'><entity name='contact'><attribute name='entityimage_url'/><attribute name='parent_contactid'/><attribute name='statecode'/><attribute name='fullname'/><order attribute='fullname' descending='false'/><attribute name='parentcustomerid'/><attribute name='telephone1'/><attribute name='emailaddress1'/><attribute name='contactid'/><filter type='and'><condition attribute='firstname' operator='eq' value='Ankit'/><condition attribute='statecode' operator='eq' value='0'/></filter></entity></fetch>";
                //EntityCollection collection = service.RetrieveMultiple(new FetchExpression(query));

                //foreach(Entity contact in collection.Entities)
                //{
                //    Console.WriteLine(contact.Attributes["emailaddress1"].ToString());
                //}

                //Console.ReadLine();

                //Let's build a LINQ QUERY

                //Whenever we are dealing with the Linq query we have a Organisation Service OBJECT

                using (OrganizationServiceContext context = new OrganizationServiceContext(service))
                {
                    var records = from contact in context.CreateQuery("contact")
                                  select contact;

                    foreach (var record in records)
                    {
                        if (!record.Attributes.Contains("lastname"))
                        {
                            throw new Exception("The Full name is not here");
                        }

                        else {

                            Console.WriteLine(record.Attributes["lastname"].ToString());
                        }

                    }
                }

               


            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }

            Console.ReadLine();
        }
    }
}

# react-forms-salesforce

A basic example of submitting form data from a React.js form to the Salesforce WebToLead.

This eample uses the [react-forms](https://github.com/codeadamca/react-forms) and the [php-env](https://github.com/codeadamca/php-env) repos as a starting point. 

The Salesforce WebToLead form was intended to process an HTML form submission to add customers to the Salesforce database. The WebToLead processing was not build to work with an AJAX request and is susceptable to CORS. This example sends the form data to a PHP proxy file which sends the form data to cURL to bypass CORS.

You will need to update the .env file with your Salesforce OID  and redirect URL aong with updating the fetch URL to match the location of your proxy.php file. 

## Tutorial Requirements:

* [react-forms](https://github.com/codeadamca/react-forms)
* [php-env](https://github.com/codeadamca/php-env)
* [Salesforce Web to lead](https://www.salesforce.com/ca/products/guide/lead-gen/web-to-lead/)

<a href="https://codeadam.ca">
<img src="https://codeadam.ca/images/code-block.png" width="100">
</a>

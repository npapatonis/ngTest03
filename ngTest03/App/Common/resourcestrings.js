﻿(function () {
    'use strict';

    angular.module('g1mApp')
        .constant('STATICUITEXT', {
            ACCOUNT: 'Account',
            ACCOUNTCREATED: 'Account Created',
            ACCOUNTCREATEDEXISTING_BODY1: 'You can now begin using Guard1/mobile',
            ACCEPTEDANDAGREED: 'Accepted and Agreed',
            ACCEPTTERMSCHECKBOXTEXT: 'PLEASE READ THESE TERMS OF SERVICE CAREFULLY. BY CLICKING "ACCEPTED AND AGREED," YOU AGREE TO THESE TERMS OF SERVICE.',
            ACTIVE: 'Active',
            ADDALOCATION: 'Add a location',
            ADDANEWLOCATION: 'Add a New Location',
            ADDAEXISTINGLOCATION: 'Add an existing location',
            ADDFOLDER: 'Add Folder',
            ADDUSER: 'Add User',
            ADMINISTRATOR: 'Administrator',
            ADDRESS1: 'Address 1',
            ADDRESS2: 'Address 2',
            ADDUSERS: 'Add Users',
            ALL: 'all',
            ALREADYEXISTS: ' already exists.',
            ASOF: 'As of',
            AT: 'at',
            AWAITINGPAYMENT: 'Awaiting Payment',
            BILLINGINFORMATION: 'Billing Information',
            CANCEL: 'Cancel',
            CANCELLATIONPOLICY: 'Cancellation Policy',
            CANCELSUBSCRIPTION: 'Cancel Subscription',
            CANNOTDELETEUSER: 'Cannot delete user',
            CHOOSE: 'Choose',
            CITY: 'City',
            CLOSEMENU: 'Close Menu',
            COMPANYNAME: 'Company Name',
            CONFIRM: 'Confirm',
            CONFIRMDELETE: 'Are you sure you would like to delete ',
            CONFIRMDELETELOCS: 'Would you like to delete all locations for this tour?',
            CONFIRMDELETELOCATION: 'Are you sure you would like to remove this location?',
            COMPLETEACCOUNTSETUP: 'Complete Your Corporate Account Setup',
            CONTACTUS: 'Contact Us',
            COPYRIGHT: '© Copyright 2015 TimeKeeping Systems, Inc.',
            CREATEANACCOUNT: 'Create an Account and try Guard1 Mobile for free!',
            CREATESYSTEMINVALIDCOMPANYNAME: 'The company name may only contain alphanumeric characters',
            CREATETOUR: 'Create Tour',
            CREATINGUSERACCOUNT: 'Creating user account',
            CREATINGUSER: 'Creating user',
            CREDITCARD: 'Credit Card:',
            CREDITCARDNUMBER: 'Credit Card Number',
            CREDITCARDISEXPIRED: 'Credit card is expired.',
            COMMENT: 'Comment',
            CONFIRMEMAILADDRESS_BODY1_0: 'A confirmation email has been sent to ',
            CONFIRMEMAILADDRESS_BODY2: 'Click on the confirmation link in the email to activate your account.',
            CONTACTSUPPORTERROR: 'An unknown error has occured. Please contact support.',
            CONTINUE: 'Continue',
            COUNTRY: 'Country',
            COUNTRYSELECT: 'Select a country',
            CREATEACCOUNTBUTTON: 'Create Account',
            CREATESYSCCACCOUNTREQUIRED: 'Please enter your credit card account number',
            CREATESYSCCADDRESSREQUIRED: 'Please enter your credit card billing address',
            CREATESYSCCCITYREQUIRED: 'Please enter your credit card billing address city',
            CREATESYSCCSCVV2REQUIRED: 'Please enter your credit card security number (located on the back)',
            CREATESYSCCEXPMONTHREQUIRED: 'Please select your credit card expiration month',
            CREATESYSCCEXPYEARREQUIRED: 'Please select your credit card expiration year',
            CREATESYSCCFIRSTNAMEREQUIRED: 'Please enter the first name as it appears on your credit card',
            CREATESYSCCLASTNAMEREQUIRED: 'Please enter the last name as it appears on your credit card',
            CREATESYSCCSTATEREQUIRED: 'Please select your credit card billing address state',
            CREATESYSCCZIPREQUIRED: 'Please enter your credit card billing address zip code',
            CREATESYSCOMPANYNAMEREQUIRED: 'Please enter your company name',
            CREATESYSEMAILREQUIRED: 'Please enter your email address or the email address of the person administering your new corporate account',
            CREATESYSFIRSTNAMEREQUIRED: 'Please enter your first name or the first name of the person administering your new corporate account',
            CREATESYSINVALIDCCACCOUNT: 'Please enter a valid credit card account number, containing 15 or 16 digits',
            CREATESYSINVALIDCOMPANYNAME: 'Please enter a valid company name, containing only letters, numbers, spaces, hyphens or underscore characters',
            CREATESYSINVALIDEMAIL: 'Please enter a valid email address for yourself or the person administering your new corporate account',
            CREATESYSLASTNAMEREQUIRED: 'Please enter your last name or the last name of the person administering your new corporate account',
            CREATEUSEREMAILREQUIRED: 'Please enter the user\'s email address',
            CREATEUSERFIRSTNAMEREQUIRED: 'Please enter the user\'s first name',
            CREATEUSERLASTNAMEREQUIRED: 'Please enter the user\'s last name',
            CREATEUSERROLEREQUIRED: 'Please select one or more role(s)',
            CURRENTLY: 'Currently ',
            CVV2: 'CVV2',
            DASHBOARD: 'Dashboard',
            DATERANGEINVALID: 'Please enter a valid date range',
            DELETE: 'Delete',
            DELETEREQUESTED: 'Delete Requested',
            DESCRIPTION: 'Description',
            DIDNTACCEPTTERMSOFSERVICE: 'You did not accept the Terms of Service Agreement',
            DONTCANCEL: 'No, don\'t cancel',
            EDIT: 'Edit',
            EDITLOCATION: 'Edit Location',
            EMAIL: 'Email',
            EMAILCONFIRMED1: 'Thank you for confirming your email, please click ',
            EMAILCONFIRMED2: ' to log in.',
            EMAILCONFIRMEDFAILED1: 'Failed to confirm the email. Click ',
            EMAILCONFIRMEDFAILED2: ' to resend the confirmation email, or contact guard1 mobile support.',
            ENTEREMAILADDRESS: 'Enter Your Email Address',
            ENDED: 'Ended',
            ENDEDBY: 'Ended By',
            ENSURELABELS: 'Ensure your labels meet these specifications',
            ERROR: 'Error',
            ERRORRESETTINGPASSWORD_0: 'Error resetting the password: ',
            EXPIRATIONMONTH: 'Expiration Month',
            EXPIRATIONYEAR: 'Expiration Year',
            EXPIRES: 'Expires',
            FINSHED: 'Finished',
            FIRSTNAME: 'First Name',
            FORGOTYOURPASSWORD: 'Forgot your password?',
            FORGOTTENYOURPASSWORD: 'Forgotten your password?',
            FROMDATE: 'From Date/Time',
            FROMDATEREQUIRED: 'Please enter a From date/time',
            FROMDATEINVALID: 'Please enter a valid From date/time',
            GETTINGSYSTEMFORUSER: 'Getting the system for user: ',
            GUARD1MOBILELOGO: 'Guard1/mobile',
            HERE: 'here',
            HERECAPS: 'HERE',
            IMSURE: 'Yes, I\'m Sure',
            INACTIVE: 'Inactive',
            INCLUDECANCELLED: 'Include cancelled',
            INCLUDECOMPLETED: 'Include completed',
            INCLUDEENDEDBYADMIN: 'Include ended by administrator',
            INCLUDEDTOURSREQUIRED: 'Please select one or more tour status(es) to include in the report',
            INCLUDEINPROGRESS: 'Include in progress',
            INCLUDEPARTIALLYCOMPLETED: 'Include partially completed',
            INFO: 'Info',
            INVALIDCREDITCARD: 'Invalid Credit Card',
            INVALIDEMAILADDRESS: 'Please enter a valid email address',
            ISTOOSHORT: 'is too short',
            ISTOOLONG: 'is too long',
            ISNOTINCORRECTFORMAT: 'is not in correct format',
            LABELSPECIFICATIONS: 'Label specifications',
            LABELSPEC1: 'Sheet Size: 8.5" x 11"',
            LABELSPEC2: 'Label Size: 1" x 1"',
            LABELSPEC3: 'Labels per sheet: 80',
            LASTNAME: 'Last Name',
            LOADING: 'Loading',
            LOCATION: 'Location',
            LOCATIONNAME: 'Location Name',
            LOCATIONNAMEREQUIRED: 'Please enter a location name',
            LOCATIONS: 'Locations',
            LOGIN: 'Login',
            LOGOUT: 'Logout',
            LOWERLEVELITEMS: ' and all lower level items',
            MESSAGE: 'Message',
            MODIFIED: 'Modified',
            MOREDETAILS: 'More Details',
            NEWFOLDER: 'New Folder ',
            NEWPASSWORD: 'New Password',
            NO: 'No',
            NOACCOUNT: 'No Account?',
            NOASSIGNABLELOCATIONS: 'The are no locations available for assignment to this tour',
            OFFICER: 'Officer',
            OFFICERS: 'Officers',
            OFFICEREXPLANATION: 'Note: Each new officer adds $9.95 to your total monthly subscription cost.',
            OFFICEREXPLANATIONTRIAL: 'Note: After trial end {0}, each new officer will add $9.95 to your total monthly subscription cost.',
            OK: 'OK',
            ORCLICK: 'Or, click',
            _0_ONLYROOTADMIN: ' is the only root level admin.',
            PASSWORD: 'Password',
            PASSWORDCONFIRM: 'Password Confirmation',
            PASSWORDSDONOTMATCH: 'Passwords do not match.',
            PASSWORDSUCCESSFULLYRESET: 'Password was successfully reset',
            PASTDUE: 'Past Due',
            PAYMENTMETHOD: 'Payment Method',
            PENDINGDELETE: 'Pending Delete',
            PHONE: 'Phone',
            PLEASELOGIN: 'Please log in',
            PRINTQRS: 'Print QRs',
            PRINT: 'Print',
            PRINTTOFULLSHEET: 'Print to Full Sheet',
            PRINTTOPARTIALSHEET: 'Print to Partial Sheet',
            PRIVACYPOLICY: 'Privacy Policy',
            PRIVILEGESNOTRIGHT: ' does not have sufficient permissions to access the this page.',
            PROVIDEDINVALIDINFORMATION: 'It appears you have provided invalid information in the required fields above. Please verify the information and click submit again.',
            PURCHASERECOMMENDEDLABEL: 'to purchase our recommended weather proof labels!',
            QRCODEPRINTCONFIGURATION: 'QR Code Print Configuration',
            RENEWSUBSCRIPTION: 'Renew Subscription',
            REPORTS: 'Reports',
            REQUESTPASSWORDRESET_0: 'Requesting a password reset for user: ',
            REQUESTPASSWORDRESET_INSTRUCTIONS: 'Change your password by following the steps below.',
            REQUESTPASSWORDRESET_STEP1: 'Fill in your email address.',
            REQUESTPASSWORDRESET_STEP2: 'We will email you a link.',
            REQUESTPASSWORDRESET_STEP3: 'Follow the link to change your password.',
            REQUIRED: 'Required',
            REQUIREDFIELDMISSING: 'Please enter all required (*) fields',
            RESENDCONFIRMATIONEMAIL: 'Resend Confirmation Email',
            RESENDWELCOMEEMAIL: 'Resend Welcome Email',
            RESETPASSWORD: 'Reset Password',
            RESETPASSWORDEMAILSENT: 'Reset Password Email Sent',
            RESETPASSWORDINSTRUCTIONS_0: 'To reset your password, click the link in the email that was just sent to: ',
            RESETTINGPASSWORD: 'Resetting password',
            ROLES: 'Roles',
            ROLESEXPLANATIONADMIN: 'Users with ADMINISTRATOR role have complete access to their folder and children folder.',
            ROLESEXPLANATIONREPORTS: 'Users with REPORTS role have limited access to Reports only. They cannot edit any information.',
            ROLESEXPLANATIONOFFICER: 'Users with OFFICER role may use the smartphone app to perform tours.',
            SAVE: 'Save',
            SAVEANDCONTINUE: 'Save and Continue',
            SAVEANDEXIT: 'Save and Exit',
            SAVETOUR: 'Save Tour',
            SELECT: 'Select',
            SELECTALL: 'Select all',
            STARTED: 'Started',
            STATE: 'State',
            STATESELECT: 'Select a state',
            STATUS: 'Status',
            SUBSCRIPTION: 'Subscription',
            SUBMIT: 'Submit',
            SYSTEMISBEINGCREATED: 'System is being created, please wait.  This can take several minutes.',
            SYSTEMSTATE: 'System State',
            THEFOLDER: 'The folder ',
            TITLE: 'Guard1/mobile',
            TOBEDELETEDLOGOUTMESSAGE: 'This system is scheduled to be deleted, you will now be automatically logged out...',
            TODATE: 'To Date/Time',
            TODATEREQUIRED: 'Please enter a To date/time',
            TODATEINVALID: 'Please enter a valid To date/time',
            TOUR: 'Tour',
            TOURCOMMENT: 'Tour Comment',
            TOURDEFINITIONNAMEISREQUIRED: 'Tour defintion name is required',
            TOURDESCRIPTION: 'Tour Description',
            TOURMUSTENDINRANGE: 'Tour must end in range',
            TOURMUSTSTARTINRANGE: 'Tour must start in range',
            TOURNAME: 'Tour Name',
            TOURSANDUSERS: 'Tours & Users',
            TOURSUMMARY: 'Tour Summary',
            TERMSOFUSE: 'Terms of Use',
            TERMSOFSERVICE: 'Terms of Service',
            TRIAL: 'Trial',
            TRYINGTOCONFIRMEMAIL: 'Attempting to confirm your email, please wait.',
            UNABLETOFINDSYSTEMURL: 'Unable to find system url',
            UNABLETOGETUSERDETAILS: 'Unable to get user details for: ',
            UNKNOWNERROR: 'Unknown Error',
            UNLIMITEDOFFICERS: 'Unlimited officers',
            UPDATE: 'Update',
            UPDATETOUR: 'Update Tour',
            UPDATEUSER: 'Update User',
            UPDATINGUSER: 'Updating User',
            USERACCOUNTCREATED: 'User Account Created',
            USERINFORMATION: 'User Information',
            USER_0: 'User ',
            VERSION: 'Version:',
            VIEWALL: 'View All',
            VIEWUSERPROFILE: 'View User Profile',
            VISITED: 'Visited',
            WELCOMEEMAILSENT: 'Email has been sent, it should be arriving shortly.',
            WELCOMETOG1M: 'Welcome to Guard1 Mobile',
            PLEASECOMPLETEREGISTRATION: 'Please complete your registration by filling out this form',
            YES: 'Yes',
            ZIPCODE: 'Zipcode',
        });
}());
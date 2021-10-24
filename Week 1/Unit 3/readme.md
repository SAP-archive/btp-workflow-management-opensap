# Setting up your development landscape

- [Overview](#section1-overview)
- [Setup Business Technology Platform Using Booster](#section1-setup)
- [Configure Destination](#section1-configure)
- [Import Sample Content](#section1-import)
- [Troubleshooting](#section1-troubleshooting)

## Overview <a name="section1-overview"></a>

In this course, you will be using your SAP Business Technology Platform Trial account. You will learn how to model, manage and monitor workflow, business rules and process visibility and process flexibility capabilities of Workflow Management. 

**SAP Workflow Management** is a cloud offering from SAP which constitutes different capabilities that helps you to digitize your processes and decisions, and to get and end-to-end visibility into your processes. Not only this we are accelerating the productivity with infusion of intelligent technologies like Intelligent RPA, Conversational AI and providing ways to flexibly configure & extend the processes in a no-code low-code environment. 

<img src="images/setup-overview-2.png" width="700">

Before you start with the exercises, setting up your SAP BTP trial account is an important prerequisite. With Booster, we have now fully automated the setup of workflow, business rules, process visibility and workflow management services in SAP BTP environment. It does the following tasks which you would have otherwise done manually:  

<img src="images/setup-overview-1.png" width="400">
  
As part of the initial setup, you will do the following to make your trial account ready to get started:  
- Run the Workflow Management Booster. 
- Configure destinations to update your trial password.
- Import & deploy sample workflow management scenario. 
> This sample process content contains pre-built workflow, business rules and process visibility. These contents will be used in the exercises


## Setup Business Technology Platform Using Booster <a name="section1-setup"></a>

Follow the tutorial to setup your account using Booster:

https://developers.sap.com/tutorials/cp-starter-ibpm-employeeonboarding-1-setup.html

<img src="images/setup-booster-1.png" width="600">

## Configure Destination <a name="section1-configure"></a>

> **WM_CF_SPACE_PROVIDER** destination is used in *Process Flexibility Cockpit* while importing the sample content from API Business Hub. This destination is already created in the previous set up tutorial, and now you will configure the destination for the password.

1. From your trial global account page, click the tile to access your subaccount where you want have run the booster.
2. To update the password of the destination, do the following:
3. Click **Connectivity | Destinations** from the left-hand navigation.
4. Search for the destination with name **WM_CF_SPACE_PROVIDER**. 
5. In *Destination Configuration* section, 
      - Click **Edit** and enter your trial user password
6. Click **Save** 
      
> Caution: Ensure that the Two Factor Authentication is disabled for the user whose username and password are entered in the destination configuration. If not, then register a new user with 2FA disabled. 
      
  <img src="images/setup-destination-1.png" width="800">
      

## Import Sample Content <a name="section1-import"></a>

1.	In your sub-account, do the following:
      - Click **Instances and Subscriptions**, from the left-panel.
      - In *Subscriptions* section, click on application link for SAP Workflow Management.
      
      <p>
      <img src="images/setup-import-1.png" width = "600">

3.	From the Workflow Management Launchpad, click **Process Flexibility Cockpit** tile.

      <img src="images/setup-import-2.png" width = "600">

4.  Click **Discover Packages**

      <img src="images/setup-import-3.png" width = "600">

5.  Search for *sample* and click on **Sample Capital Expenditure Approval Process** to navigate into the content package.

      <img src="images/setup-import-4.png" width = "600">

6.  Read the content overview to get information of the content and click on **Import**. 

      <img src="images/setup-import-5.png" width = "600">
      
   
    > In the **Import Package** popup that comes, click on **Import** to continue. 
       > <img src="images/setup-import-51.png" width = "400">
      
    > Wait for the content to import. It will take 2-3 minutes for the content to be imported.
       > <img src="images/setup-import-52.png" width = "400">
    

9.	Click on **My Live Processes** link on top left to go back the to Live Processes dashboard.
    > Once the content is import successfully, you will see the *Import* button changes to *Configure*.

      <img src="images/setup-import-6.png" width = "600">

10. Click on the **Sample Capital Expenditure Approval Process** to navigate into the package to activate the business rules.

      <img src="images/setup-import-7.png" width = "600">

11. As you go into the package, click on **Determine All Approvers** rule from **Decisions** tile. 

      <img src="images/setup-import-8.png" width = "600">

12. In the **Manage Decisions** application, click on **Activate**. 
    
    >This will activate and deploy the business rules in your trial account. 
    
    <img src="images/setup-import-9.png" width = "600">


## Troubleshooting <a name="section1-troubleshooting"></a>

##### Symptom: Import of the sample package fails with this error as the user has 2FA enabled

<img src="images/setup-troubleshoot-7.png" width="600">

1. Download [SampleCapitalExpenditureApprovalRules.zip](https://github.com/SAP-samples/teched2020-DEV163/blob/main/exercises/Exercise0/) rules project.

2. From the *Workflow Management Launchpad*, click **Manage Rule Projects** tile.

    <img src="images/setup-troubleshoot-1.png" width="600">

3. Click **Import** and then click **Upload Project from File System**.

    <img src="images/setup-troubleshoot-2.png" width="600">

4. Click **Browse** to select the downloaded zip file.
    - Click **Import**. 
    
    <img src="images/setup-troubleshoot-3.png" width="400">

> The business rules project will be imported as REVISED CONTENT.

5.  Click on the **SampleCapitalExpenditureApprovalRules** to navigate into the project to deploy the business rules.

    <img src="images/setup-troubleshoot-4.png" width="600">

10. Switch to **Rule Services** tab.
    - Click **Deploy** to deploy *Determine All Approvers* rule service. 
    
    <img src="images/setup-troubleshoot-5.png" width="600">

12.	Select **Cloud Runtime** as system to deploy.

    <img src="images/setup-troubleshoot-6.png" width="400">


  > Wait for the successful deployment message to appear on the screen. 


# Angular App Client - Beaconcure

This is an Angular app that serves as a file explorer. It allows users to fetch and display files data from a server and view details of individual tables within the files.\
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.



## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.

## Running Instructions

To run the Angular app locally, follow these steps:

1. Install the required dependencies by running `npm install`.
2. Start the server by running `npm start` or `ng serve`.
3. Open your web browser and navigate to `http://localhost:4200`.


<ins>**Note**</ins>: the client app is reaching out an a server at url `https://localhost:5000`.
>Until docker implementation is completed the client and server runs seperately. make sure the server runs before the client.


## Usage

1. Start the server by running `npm start` or `ng serve`.
2. Open your web browser and navigate to `http://localhost:4200` to access the app.
3. Click the "Get Files" button to fetch the files data from the server.
4. The list of files will be displayed in an accordion-style format.
5. Click on a file to expand and view its tables.
6. Click on a table to view its details.
7. To close the table details view, click the "Close" button.


## Folder Structure

The app follows the following folder structure:

- `src/`: The root directory of the Angular app.
  - `index.html`: The main HTML page for the app.
  - `main.ts`: The entry point of the Angular app.
  - `style.css`: The global CSS styles file.
  - `app/`: Contains the component files in which the application logic and data are defined.
    - `app.component.ts`: The main component, defines the logic for the application's root component, named AppComponent.
    - `app.component.html`: Defines the HTML template associated with the root AppComponent.
    - `app.component.css`: Defines the base CSS stylesheet for the root AppComponent.
    - `app.module.ts`: Defines the root module, named AppModule.
    
- `src/app/` content:
  - `models/`: Directory for the Model, holds data structuresfor `File`, `Table` and `FileResponse`.
  - `services/`: Directory containing the services for the app.
    - `files.service.ts`: A service file for files service. contains `fetchFilesData` service for a request for files from server
  - `components/`: Directory containing reusable components used in the app. with their `<component_name>.component.html` and `<component_name>.component.css` which Defines the HTML template and the base CSS stylesheet respectively.
    - `files-list/`: Directory containing files related to the file list component.
        - `files-list.component.ts`: Renders a list of files with accordion-style expanding.
    - `table-list/`: Directory containing files related to the table list component.
        - `table-list.component.ts`: Renders a sub list of tables as clickable items.
    - `table-details/`: Directory containing files related to the table details component.
        - `table-details.component.ts`: Renders details of a selected table.


## External Libraries

This app utilizes the following external libraries:

- <ins>**Angular**</ins>: A TypeScript-based, free and open-source single-page web application framework.
- <ins>**axios**</ins>: A promise-based HTTP client for making API requests.
- <ins>**Angular-Material**</ins>: A popular Angular UI framework for building responsive and beautiful user interfaces.


## Additional Information

For more detailed information about each file or component, please refer to the individual files and their respective comments.



## Future Improvements

* Dockerize the client with the server to create a single instance.
> TODO: implement dockerizing the app by writing docker compose and dockerfile files
* Add configuration file for global constants such as port and server url.
* Add theme support and better color handling with mui elements
* Add Logging ability to the App
* Improve Error handling and design pattern.
---


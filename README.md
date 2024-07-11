
# Telematics-for-EV

The EV Diagnosis system is a comprehensive application built on the MERN (MongoDB, Express.js, React.js, Node.js) stack, with additional technologies like Tailwind CSS for styling and Vite for fast development. Its primary function is to provide users with real-time insights into the condition of their electric vehicles (EVs), catering to different types such as two-wheelers, three-wheelers, and four- wheelers. Users interact with the system through a user-friendly web interface developed with React.js on the frontend. Upon logging into their accounts, users can access a dashboard where they can select their vehicle type and view its current condition. This includes crucial information such as battery status, speed, and diagnostic data gathered from the On-Board Diagnostic (OBD) system. One of the key features of the system is its ability to store and manage users' data securely in MongoDB. Users can input and store essential documents related to their EVs, such as insurance ID, registration ID, and driver's license. This centralized storage ensures that users can easily access and manage their vehicle-related information within the application. The backend of the system, powered by Express.js and Node.js, handles data processing, user authentication, and communication with the MongoDB database. Through secure APIs, the backend facilitates seamless communication between the frontend and the database, ensuring that users' data is retrieved and displayed accurately. The system's functionalities are diverse and address various aspects of EV maintenance and monitoring. It includes features like determining driver behavior, which may involve analyzing driving patterns and providing feedback to users for safer and more efficient driving practices. Additionally, the system continuously monitors the vehicle's battery status, alerting users to any potential issues or recommending optimal charging practices to prolong battery life. Furthermore, the system employs On- Board Diagnostic technology to detect and report the vehicle's speed accurately. This allows users to stay informed about their vehicle's performance and adherence to speed limits, contributing to safer driving practices. Overall, the EV Diagnosis system offers a comprehensive solution for EV owners to monitor and maintain their vehicles effectively. By leveraging modern technologies and robust functionality, it enhances the user experience and promotes sustainable and responsible usage of electric vehicles.
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Client

`VITE_SERVER_API_URL='http://localhost:4201/api/v2'`

Server

`PORT=4201`

`MONGO_DB_URL=""`


## Installation

Install EV Diagnosis with npm

```bash
  gh repo clone Adityadj01/EVDiagnose
  cd Client
  npm Install
  cd..
  cd Server
  npm Install
```
    
## Deployment

To deploy this project run

```bash
  cd Client
  npm run dev
```

```bash
  cd Server
  npm run dev
```


## Run Locally

Clone the project

```bash
  git clone Adityadj01/EVDiagnose
```

Go to the project directory

```bash
  cd EVDiagnose
```

Install dependencies

```bash
  npm install
```

Start the Client

```bash
  npm run dev
```

Start the Server

```bash
  npm run dev
```


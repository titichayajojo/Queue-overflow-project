# Queue Overflow Project

This project is a web application developed as part of a Web Programming class, using **React** for the frontend and **Django** for the backend. It serves as a platform to manage and handle queues efficiently, offering both user-facing and administrative functionalities.

## Features

- **User Authentication:** Secure login and registration system using Django's built-in authentication.
- **Queue Management:** Users can join, leave, and view queues in real-time.
- **Admin Panel:** Admins can manage queues, view statistics, and moderate user activity.
- **Responsive UI:** The frontend is built with React, providing a smooth and responsive user experience.
- **API Integration:** The frontend communicates with the backend via RESTful APIs.

## Installation

### Prerequisites

- Node.js and npm
- Python and Django
- PostgreSQL (or another preferred database)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/titichayajojo/Queue-overflow-project.git
   cd Queue-overflow-project
   ```

2. Set up a virtual environment and install dependencies:
   ```bash
   python -m venv env
   source env/bin/activate
   pip install -r requirements.txt
   ```

3. Configure the `.env` file with your database credentials and other necessary environment variables.

4. Apply migrations and start the Django server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the `src` directory:
   ```bash
   cd src
   ```

2. Install npm dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

After completing the installation steps, you can start using the application by accessing it via the web browser. Users can sign up, log in, and begin managing their queues. Administrators have access to a dedicated panel for advanced queue management.


This project was created as part of an educational exercise and is continuously being improved.

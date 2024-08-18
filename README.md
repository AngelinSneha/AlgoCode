# AlgoCode - Advanced Microservices-based Code Compilation and Execution Platform like Leetcode or Codeforces

- **Microservices Architecture & Scalability**: Architected an advanced, highly scalable microservices-based platform for code compilation and execution, ensuring seamless scalability and high availability with AWS deployment and auto-scaling capabilities.

- **Dynamic Problem Administration**: Engineered a sophisticated Problem Admin Service using JavaScript, Express, and MongoDB to manage CRUD operations for problems, incorporating complex test cases and code stubs to facilitate comprehensive evaluation.

- **Advanced Code Execution**: Developed a cutting-edge Executor Service in TypeScript and Express, leveraging Docker containers to support multi-language code execution (Java, Python, C++). Employed Strategy and Factory design patterns to optimize execution environments and manage Time Limit Exceeded (TLE) conditions effectively.

- **High-performance Asynchronous Communication**: Designed a robust submission service with Fastify, handling a high volume of requests with exceptional performance. Utilized Redis message queues for efficient asynchronous communication, ensuring seamless integration between submission and executor services. Implemented WebSocket services to provide real-time feedback to users, enhancing interactivity and responsiveness.

- **AWS Deployment & Operational Excellence**: Deployed the entire system on AWS, utilizing auto-scaling groups, load balancers, and monitoring tools to ensure optimal performance, fault tolerance, and operational excellence.
<img width="1431" alt="image" src="https://github.com/AngelinSneha/AlgoCode-problem-solving/assets/66509492/4b33c7fc-1938-402a-8599-1bce71d38b75">

 **Error Logging**: Utilizes the `winston` package for comprehensive error logging, ensuring easy tracking and resolution of issues.

---

## Project Structure

- **Frontend Repository**: The frontend code for Algocode is available at [Algocode-Frontend](https://github.com/AngelinSneha/AlgoCode-Frontend).

- **Evaluation Service**: The code evaluation service responsible for assessing submitted code is hosted at [Algocode-Evaluate-Service](https://github.com/AngelinSneha/Algocode-Evaluate-Service).

- **Submission Service**: Manages the submission of user code to the queue using [Algocode-Submission-Service](https://github.com/AngelinSneha/Algocode-Submission-Service), allowing the evaluation service to process it through BullMQ.

---

## Architecture
<img width="724" alt="image" src="https://github.com/user-attachments/assets/0b055e7e-2270-44ce-a1ac-6a1edb75af6b">
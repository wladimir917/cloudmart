import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header showSearch={false} />
      <main className="container mx-auto py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">About American Transportation</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Project</h2>
          <p className="mb-4">
          American Transportation is an innovative limo platform developed as part of a cloud computing and artificial intelligence stack. This project serves as a proof of concept, combining cutting-edge technologies to create a modern, AI-powered online booking solution.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside mb-4">
            <li>AI-powered booking recommendations</li>
            <li>Cloud-based infrastructure for scalability and reliability</li>
            <li>Real-time inventory management</li>
            <li>Secure payment processing</li>
            <li>Personalized user experiences</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <p className="mb-4">
            Our project leverages a wide range of cloud and AI technologies, including:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>AWS (Amazon Web Services) for cloud infrastructure</li>
            <li>React for frontend development</li>
            <li>Node.js and Express for backend services</li>
            <li>Machine Learning models for product recommendations</li>
            <li>Natural Language Processing for customer support chatbot</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">About American Limo Transportation</h2>
          <p className="mb-4">
          American Limo Transportation is a leading provider. Through projects like American Limo Transportation, they offer students the opportunity to gain practical experience with real-world applications of cloud and AI technologies.
          </p>
          <p>
            For more information about American Transportation and their service, visit <a href="https://www.americanlimofl.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.americanlimofl.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
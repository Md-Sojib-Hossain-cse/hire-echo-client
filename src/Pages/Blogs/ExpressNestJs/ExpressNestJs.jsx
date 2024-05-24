const ExpressNestJs = () => {
    return (
        <div>
            <h3 className="text-2xl font-medium text-center">What is express js? What is Nest JS (google it)?</h3>
            <div className="p-4 rounded-lg">
                <img src="https://i.ibb.co/B3hTzcc/expressvsnext.png" alt="token-image" className="h-full w-full rounded-lg" />
            </div>
            <p className="pr-6 text-right">Published at : 25th May , 2024</p>
            <div className="p-4">
                <p className="mt-2">It is crucial for developers to make an informed decision when choosing a framework for their projects. NestJS and Express.js are two of the most popular frameworks in the Node.js ecosystem for building large-scale applications. This article will compare NestJS and Express.js based on their features, architecture, community support, and more. It will explore their core components and provide insights into their ideal use cases, as well as offer guidelines for migrating from Express.js to NestJS.</p>
                <h4 className="text-xl font-medium mt-4">What is NestJS?</h4>

                <p className="mt-2">NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.</p>

                <p className="mt-2">This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project.</p>

                <p className="mt-2">Nest uses the Express HTTP framework by default. However, Nest is platform agnostic, meaning it can work with any Node HTTP framework. For example, it can optionally be <a href="https://www.npmjs.com/package/@nestjs/platform-fastify" className="text-blue-400 cursor-pointer underline" target="_blank">configured to use Fastify</a> , which can improve the Node framework.</p>

                <p className="mt-2">One of the cool things about NestJS is that anything supported in Express (i.e., Express functions) is also supported in Nest.</p>



                <h4 className="text-xl font-medium mt-4">NestJS core components</h4>

                <p className="mt-2">Let’s go over some of the core components of NestJS.</p>

                <p className="mt-2">A module is a class that has been annotated with the @Module() decorator. Nest uses the metadata provided by the @Module() decorator to organize the application structure.</p>

                <p className="mt-2">Classes like services, repositories, and helpers can be treated as providers; simply adding the @Injectable() decorator from Nest will handle the resolution, making dependency management extremely simple.</p>

                <p className="mt-2">When an HTTP request is received, the routing mechanism routes it to the correct controller within NestJS. Controllers handle incoming requests and respond to the application’s client side.</p>


                <h4 className="text-xl font-medium mt-4">Features of NestJS</h4>

                <p className="mt-2">Working with Node and Express is great for building a small, lightweight app where the code is easy to read. However, as things start to get complex and you add more features to your application, your code will start to get a little messier and harder to manage.</p>

                <p className="mt-2">This is where NestJS comes in. Nest can organize your application into self-contained modules, each with its own responsibility. A module can contain related controllers and services and keep them fairly isolated from the rest of your application.</p>

                <p className="mt-2"> <a href="https://blog.logrocket.com/top-five-typescript-dependency-injection-containers/" className="text-blue-400 cursor-pointer underline" target="_blank">Nest also supports dependency injection</a>. Using dependency injection means you don’t need to have a hard dependency on things like components, services, and middleware within your code.</p>

                <p className="mt-2">You also get easy MongoDB support with Nest. A lot of web apps built with Node use the MEAN stack, which consists of MongoDB, Express, Angular, and Node. One of the most popular libraries for accessing the Mongo database is Mongoose. You can easily connect to the MongoDB database and use it to build scalable applications using the <a href="https://www.npmjs.com/package/@nestjs/mongoose" className="text-blue-400 cursor-pointer underline" target="_blank">NestJS Mongoose package.</a> </p>

                <p className="mt-2">
                    Finally, as we already mentioned, NestJS uses the Express framework by default as the request processing pipeline. This means if you are already familiar with Express processing, you’ll be able to adapt your Express middleware to use within Nest.
                </p>


                <h4 className="text-xl font-medium mt-8">What is Express.js?</h4>

                <p className="mt-2">Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.</p>

                <div className="p-6">
                    <img src="https://i.ibb.co/QrdJy1d/express.png" alt="" className="w-full h-full" />
                </div>


                <p className="mt-2">You can use Express with Node to create single-page, multi-page, or hybrid web applications. It supports the <a href="https://blog.logrocket.com/building-structuring-node-js-mvc-application/" className="text-blue-400 cursor-pointer underline" target="_blank">MVC architectural pattern for designing web applications</a> : Model, View, and Controller.</p>


                <h4 className="text-xl font-medium mt-8 md:mt-12">Features of Express.js</h4>

                <p className="mt-2">Middleware is a program component that has access to a database, client requests, and other middleware. It is primarily responsible for the systematic organization of various Express.js functions.</p>

                <p className="mt-2">When it comes to routing, Express includes a sophisticated routing mechanism that uses URLs to preserve the state of the webpage.</p>

                <p className="mt-2">Finally, Express includes template engines that enable developers to create dynamic content for webpages by creating HTML templates on the server side.</p>


                <h4 className="text-xl font-medium mt-8">NestJS vs. Express.js</h4>

                <p className="mt-2">In this section, we will directly compare various aspects of Nest and Express, including example use cases for each.</p>

                <h4 className="text-xl font-medium mt-4">Opinionated and un-opinionated</h4>

                <p className="mt-2">Nest is a framework with strong opinions. It adheres to the design paradigm of “convention over configuration,” which allows developers to use standard tools and code in a specific manner, thus reducing the need for explicit configuration.</p>

                <p className="mt-2">In addition, NestJS is Angular-based, so TypeScript is its primary programming language, although you can also use JavaScript. The use of TypeScript ensures that the application is reliable and bug-free.</p>

                <p className="mt-2">Express.js is a framework without strong opinions — in other words, un-opinionated. This means it doesn’t have a set of pre-defined rules to follow. Developers often use this opportunity to experiment with different scenarios and write code as needed.</p>


                <h4 className="text-xl font-medium mt-4">Perfomance</h4>

                <p className="mt-2">Express can execute multiple operations independently of each other using asynchronous programming. Nest employs the Express framework by default.</p>

                <p className="mt-2">However, Nest also provides an alternative way to change the underlying framework from Express to Fastify for significantly improved performance.</p>


                <h4 className="text-xl font-medium mt-4">Architecture</h4>

                <p className="mt-2">Nest offers a ready-to-use application architecture using controllers, providers, and modules. This enables developers and teams to create applications that are simple to test and maintain.</p>

                <p className="mt-2"><a href="https://blog.logrocket.com/organizing-express-js-project-structure-better-productivity/" className="text-blue-400 cursor-pointer underline" target="_blank">Express does not require a specific structure</a>, which can provide flexibility for small or one-person development teams. However, this can become a problem as team size or app complexity grows, especially with developers working on different aspects of the app.</p>



                <h4 className="text-xl font-medium mt-4">Use cases</h4>

                <p className="mt-2">Some examples of what to build with NestJS include enterprise-level web applications and e-commerce applications. NestJS applications scale well, making them perfect for large, enterprise-level applications. It’s no surprise that leading companies like Adidas, Roche, Trilon, and others use Nest.</p>

                <p className="mt-2">We can also easily <a href="https://blog.logrocket.com/how-build-ecommerce-app-nestjs/" className="text-blue-400 cursor-pointer underline" target="_blank">construct e-commerce websites by combining NestJS</a> with a frontend framework like React, Angular, or Vue.</p>


                <h4 className="text-xl font-medium mt-4">Creating new Nest project</h4>

                <p className="mt-2">First things first, let’s create our new Nest project by running this:</p>

                <p className="p-4 font-medium bg-base-300 rounded-lg my-3">$ nest new coobook-api</p>

                <p className="mt-2">Next, we will set up our modules by creating our recipes module directory. For this project, we’ll have only one module: recipes:</p>

                <p className="p-4 font-medium bg-base-300 rounded-lg my-3">$ cd cookbook-api/src <br />
                    $ mkdir recipes</p>

                <p className="mt-2">Every module in NestJS has a module class annotated with a @Module() decorator where we organize our module by defining its components. Our recipe module file will be called recipes.module.ts and contain the following:</p>

                <p className="p-4 font-medium bg-base-300 rounded-lg my-3">{`// recipes.module.ts`} <br /><br />
                    {`import { Module } from '@nestjs/common';`} <br />
                    {`import { RecipesController } from './recipes.controller';`} <br /> <br />
                    {`@Module({})`} <br />
                    {`export class RecipesModule {}`}</p>

                <p className="mt-2">At this point in our migration, we haven’t created any controllers or providers yet so it’s pretty bare. Get a glimpse of our module with a bit more functionality here.</p>



                <h4 className="text-xl font-medium mt-4">Conclusion</h4>

                <p className="mt-2">According to some developers, you are ahead of the game if you are already using NestJS. This framework gives you a significant advantage early on and also helps you <a href="https://blog.logrocket.com/node-back-end-next-level-nestjs/" className="text-blue-400 cursor-pointer underline" target="_blank">ake your Node backend to the next level</a> t by properly structuring your app.</p>

                <p className="mt-2">However, Express.js is one of the best and most popular backend development frameworks using JavaScript, and will likely remain so for some time. Which option do you prefer? Share your thoughts in the comment section!</p>


                <p className="mt-8 text-sm text-right">Happy Coding ....</p>
            </div>
        </div>
    );
};

export default ExpressNestJs;
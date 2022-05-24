import React from 'react';

const Blogs = () => {
    return (
        <div className='px-16'>
            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p className='text-justify'>There are a number of ways in which React Application Permalink can be extended. And it doesn't depend on just one method. Many methods can be used to increase the parpommance of a react up. One of its uses is Using Immutable Data Structures to complete it depending on the programmer who developed the application. And a developer can easily use it in font-end and it has no side-effects. The best part of this is that the React app offers a lot of libary for optimization for exmple: Immutability Helper: This is a good library when it comes to mutating a data copy without changing the source. Immutable.js: This is my favorite library. As it provides a lot of persistent immutable data structures, including: List, Stack, Map, OrderedMap, Set, OrderedSet, and Record. Another efficient way to optimize the React application is to use function components.
                        function components with potentially faster updates.
                        Another efficient way is to use the pure components of React. Dependency optimization is another most efficient way to improve your React app and so many oye to improve your React app performance for example: CSS Animations Instead of JS Animations, Using a CDN, Using Web Workers for CPU Extensive Tasks, Analyzing and Optimizing Your Webpack Bundle Bloat, Avoid Async Initialization in, Spreading props on DOM elements.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
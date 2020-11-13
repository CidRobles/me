import React from 'react';

function ContactForm() {
    return (
        <form class="w-full mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5">
                <input class="w-full appearance-none bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-teal-500" type="text" placeholder="First Name" aria-label="First Name"></input>                                                        
                </div>
                <div className="p-5">
                <input class="w-full appearance-none bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-teal-500" type="text" placeholder="Last Name" aria-label="Last Name"></input>                                                    
                </div>
                <div className="p-5">
                <input class="w-full appearance-none bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-teal-500" type="email" placeholder="Email Address" aria-label="Email Address"></input>                                                        
                </div>
                <div className="p-5">
                <input class="w-full appearance-none bg-transparent p-2 border-b border-gray-500 focus:outline-none focus:border-teal-500" type="text" placeholder="Phone number" aria-label="Phone number"></input>                                                    
                </div>                 
            </div>
        </form>
    );
}

export default ContactForm;

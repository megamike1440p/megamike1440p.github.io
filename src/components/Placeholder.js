//Placeholder.js
import React from 'react';

const placeholderContent = {
    intro: "This is a placeholder",
    content: "A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it A bunch of stuff to fill up space so I have to scroll, I gotta test the jump-to function on the top bar out and this is a good way to do it"
};

const Placeholder = () => {
    return (
        <div className="container-custom">
            <div className="mt-4 space-y-3">
                <p>{placeholderContent.intro}</p>
                <p>{placeholderContent.content}</p>
            </div>
        </div>
    );
}

export default Placeholder;
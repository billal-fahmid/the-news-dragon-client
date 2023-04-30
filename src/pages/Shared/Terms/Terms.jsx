import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms And Condition</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet nesciunt necessitatibus, sequi eos minima veniam minus placeat inventore illo nisi ipsam animi sit ab sunt quasi temporibus vel velit aspernatur quos non magni ut! Exercitationem vitae enim non unde, nobis cumque quisquam, voluptatem minus fuga, culpa at repellat hic.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
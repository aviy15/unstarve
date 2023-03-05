import background from "../images/background.png";
import { useState } from 'react';





export function UserInfo() {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = event => {

        event.preventDefault();

        //username age and contact



        setUsername('');
        setAge('');
        setContact('');

    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundImage: `url(${background})`,
            width: '100%',
            height: '100vh',
        }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=EB+Garamond&family=Manrope:wght@800&family=Source+Sans+Pro:wght@200&display=swap');
                font-family: 'Manrope', sans-serif;
            </style>
            <br></br>
            <div style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#C0847C',
                padding: '10px',
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
                borderRadius: '20px',
                marginTop: '5px',

            }}>
                <span
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '30px',
                        marginTop: '5px',

                    }}
                >
                    Let us know you
                </span>
                <br></br>

                <form
                    onSubmit={handleSubmit}
                >
                    <span
                        style={{
                            marginTop: "10px"
                        }}
                    >
                        Name <br></br>
                    </span>
                    <input style={{
                        padding: '12px',

                        borderRadius: '5px',
                        border: "0.5px solid #4CAF50",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "20px",
                        width: '500px',
                        marginTop: '5px',

                    }} placeholder="Your name" class="name"
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                    ></input>
                    <br></br>

                    <span style={{
                        marginTop: "10px"
                    }}
                    >
                        Age <br></br>
                    </span>
                    <input style={{
                        padding: '12px',
                        borderRadius: '5px',
                        marginTop: '5px',
                        border: "0.5px solid #4CAF50",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "20px",
                        width: '500px',
                        marginTop: '5px',

                    }} placeholder="Enter your age" class='age'
                        value={age}
                        onChange={event => setAge(event.target.value)
                        }></input>
                    <br></br>

                    <span
                        style={{
                            marginTop: "10px"
                        }}
                    >
                        Phone Number <br></br>
                    </span>
                    <input style={{
                        padding: '12px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        border: "0.5px solid #4CAF50",
                        fontFamily: "'Source Sans Pro', sans-serif",
                        fontSize: "20px",
                        width: '500px',
                        marginTop: '5px',
                    }} placeholder="Phone No. here" class="contact"
                        value={contact}
                        onChange={event => setContact(event.target.value)}
                    ></input>
                    <br></br>


                    <br></br>

                    <button
                        style={{
                            padding: '10px',
                            backgroundColor: 'white',
                            color: 'black',
                            border: "2px solid #4CAF50",
                            width: '525px',
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: "20px",
                            borderRadius: "50px",
                            marginTop: "20px",
                            marginBottom: "20px",

                        }}
                        type="submit"
                    >
                        Let go!
                    </button>
                </form>
            </div>
        </div>
    );
};

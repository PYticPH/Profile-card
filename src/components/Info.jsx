// Profile card info component

export default function Info() {
    return (
        <header className="info">
            <figure>
                <img src="../../public/profile.jpg" alt="Profile Picture" />
            </figure>
            <h1>PYticPH</h1>
            <h2>Frontend Developer</h2>
            <a href="mailto:pyticph@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/pyticph/" target="_blank" rel="noreferrer">LinkedIn</a>
        </header>
    )
}
/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #4e54c8, #8f94fb);
    color: #fff;
    overflow-x: hidden;
}

/* Navigation Bar */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 90%;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

.logo {
    font-size: 2rem;
    font-weight: 600;
}

.xp {
    color: #FFD700;
}

nav a {
    margin-left: 2rem;
    text-decoration: none;
    color: #fff;
    transition: color 0.3s;
}

nav a:hover {
    color: #FFD700;
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
}

.animated-heading {
    font-size: 4rem;
    animation: floatIn 1.5s ease-in-out;
}

.animated-subtitle {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0;
    animation: fadeIn 2s ease-in-out forwards 0.5s;
}

.cta-button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: #FFD700;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.1);
}

/* Background Objects */
.background-objects div {
    position: absolute;
    animation: float 4s infinite ease-in-out;
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    top: 20%;
    left: 10%;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid rgba(255, 255, 255, 0.3);
    bottom: 20%;
    right: 10%;
}

.square {
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.3);
    top: 50%;
    right: 40%;
}

/* Section Styling */
.content {
    padding: 5rem 10%;
    animation: fadeInUp 1s ease-in-out;
}

/* Leaderboard */
.animated-item {
    margin: 1rem 0;
    animation: slideIn 1s ease-in-out;
}

/* Keyframes */
@keyframes floatIn {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    0% {
        opacity: 0;
        transform: translateX(-100px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

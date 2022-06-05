import styled from "styled-components";

export const Container = styled.div`
    background: var(--red);
    img {
        width: 47px;
        margin-right: 0;
        padding: 15px 0;
    }

`;


/*@media (max-width: 767px) {
    header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60%;
        width: 90%;
        margin: auto;
    }
    
    header {
        width: 100%;
        background-color: #52014b;
    }

    .item-menu-movel {
        display: block;
    }

    .item-menu-desktop {
        display: none;
    }

    .menu-section nav {
        display: none;
    }

    li {
        margin: 10%;
        display: flex;
    }

    li a {
        color: white;
    }

    .one,
    .two,
    .three {
        background-color: #ffffff;
        height: 5px;
        width: 100%;
        margin: 6px auto;
        transition-duration: 0.3s;
    }

    .menu-toggle {
        width: 40px;
        height: 30px;
        margin-right: 20px;
    }

    .menu-section.on {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120%;
        background: #730277;
    }

    .menu-section.on nav {
        display: block;
    }


    .menu-section.on .menu-toggle {
        position: absolute;
        right: 25px;
        top: 25px;
    }


    .menu-section.on .menu-toggle .one {
        transform: rotate(45deg) translate(7px, 7px);
        background-color: #fff;
    }

    .menu-section.on .menu-toggle .two {
        opacity: 0;

    }

    .menu-section.on .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
        background-color: #fff;
    }

}

@media (min-width: 767px) {
    header {
        width: 50px;
        height: 624px;
        background-color: #53084c;
    }

    header .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }


    header .container .menu-section {
        height: 85%;
    }

    header .container .menu-section li {
        display: flex;
        justify-content: center;
    }

    header .container .menu-section nav {
        height: 100%;
    }

    header .container .menu-section li a {
        color: white;
    }

    header .container .menu-section nav ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    header .container .menu-section nav ul .item-menu-movel {
        display: none;
    }
    
    header .container .menu-section nav ul .item-menu-desktop {
        width: 30px;
        height: 25px;
        display: block;
    }
}*/
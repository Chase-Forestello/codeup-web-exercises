import HomeHTMLFunction, {HomeJSFunction} from "./views/Home.js";
import AboutHTMLFunction, {AboutJSFunction} from "./views/About.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import Login from "./views/Login.js";
import LoginEvent from "./auth.js";
import Register from "./views/Register.js"
import {RegisterEvent} from "./views/Register.js";
import UserIndex, {UserEvents} from "./views/User.js";
import Logout, {LogoutEvents} from "./views/Logout.js";
import DogFactsHTMLFunction, {DogFactsJSFunction} from "./views/DogFacts.js";
import QuotesHTMLFunction, {QuotesJSFunction} from "./views/Quotes.js";
import AddDogFactHTMLFunction, {AddDogFactJSFunction} from "./views/AddDogFact.js";
import AddQuoteHTMLFunction, {AddQuoteJSFunction} from "./views/AddQuote.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: HomeHTMLFunction,
            state: {},
            uri: '/',
            title: 'Home',
            viewEvent: HomeJSFunction
        },
        '/logout': {
            returnView: Logout,
            state: {},
            uri: '/',
            title: 'Logout',
            viewEvent: LogoutEvents
        },
        '/login': {
            returnView: Login,
            state: {},
            uri: '/login',
            title: "Login",
            viewEvent: LoginEvent
        },
        '/register': {
            returnView: Register,
            state: {},
            uri: '/register',
            title: 'Register',
            viewEvent: RegisterEvent
        },
        '/users': {
            returnView: UserIndex,
            state: {},
            uri: "/users",
            title: 'User Info',
            viewEvent: UserEvents
        },
        '/about': {
            returnView: AboutHTMLFunction,
            state: {},
            uri: '/about',
            title: 'About',
            viewEvent: AboutJSFunction
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/dogs': {
            returnView: DogFactsHTMLFunction,
            state: {
                dogFacts: {
                    url: "https://dogfacts.fulgentcorp.com:12250/v1/facts?random=false&limit=30",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': JALOPY_API_KEY
                    }
                }
            },
            uri: '/dogs',
            title: 'Dog Facts',
            viewEvent: DogFactsJSFunction
        },
        '/quotes': {
            returnView: QuotesHTMLFunction,
            state: {
                quotes: {
                    url: "https://quotes.fulgentcorp.com:12250/v1/quotes?random=false&limit=30",
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': JALOPY_API_KEY
                    }
                }
            },
            uri: '/quotes',
            title: 'Quotes',
            viewEvent: QuotesJSFunction
        },
        '/insert-dog-fact': {
            returnView: AddDogFactHTMLFunction,
            state: {},
            uri: '/insert-dog-fact',
            title: 'Insert Dog Fact',
            viewEvent: AddDogFactJSFunction
        },
        '/insert-quote': {
            returnView: AddQuoteHTMLFunction,
            state: {},
            uri: '/insert-quote',
            title: 'Insert Quote',
            viewEvent: AddQuoteJSFunction
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HeroPage = lazy(() => import('../pages/Hero'));
const AboutPage = lazy(() => import('../pages/About'));

function Router() {
    return (
        <Suspense fallback={<span>Loadind...</span>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HeroPage} />
                    <Route exact path='/about' component={AboutPage} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default Router;
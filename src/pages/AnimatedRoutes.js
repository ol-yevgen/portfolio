import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import routes from '../data/pagesRoutesData';

const AnimatedRoutes = () => {
    const location = useLocation();

    const { nodeRef } =
        routes.find((route) => route.path === location.pathname) ?? {}

    return (
        <main className="animation-container">
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    nodeRef={nodeRef}
                    timeout={{ enter: 800, exit: 600 }}
                    classNames='fade'
                    unmountOnExit
                >
                    {(state) => (
                        <div ref={nodeRef} className="fade">
                            <Routes location={location} key={location.pathname}>
                                {routes.map((route) => {
                                    return <Route
                                        key={route.path}
                                        path={route.path}
                                        element={route.element}
                                        className='fade'
                                        ref={nodeRef}>
                                    </Route>
                                })
                                }

                            </Routes>
                        </div>
                    )}

                </CSSTransition>
            </SwitchTransition>
        </main>
    )
}



export default AnimatedRoutes;
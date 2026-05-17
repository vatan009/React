# propdrilling
Problem of Shared State : prop drilling

sharing state with context
managing context with Reducers


  ------------2-------------
  aaplya app madhe state ashu shaktat je child madhe send krychya
  e.g.

  app(cart,onupdate)->shop->product(update cart)
                    ->Header->CartModal->Cart(cart - display)
  tya mula shop,header,CartModal sarkhe component prop use karat nahit but forward karnyasathi prop imput ghetat

  solution of this :    Component composition - using children
                        Context API



# Context API
wrap the context around multiple compoents
possibly around all components in the app
great thing about this : context value can easily connected to state
so we can get rid of the props,stateupdating function we are passing

const CartContext=createContext();
CartContext will actually be a object
















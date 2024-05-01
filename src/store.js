import { create } from "zustand";
import axios from "axios"

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product, cart) => {
        const filterdCart = cart.filter((item) => item.name !== product.name)
        product.inCart++
        set(() => ({ cart: [...filterdCart, product] }))
    },
    removeFromCart: (product, cart) => {
        const filterdCart = cart.filter((item) => item.name !== product.name)
        if (product.inCart > 0) {
            product.inCart--
        }
        if (product.inCart > 0) {
            set(() => ({ cart: [...filterdCart, product] }))
        } else {
            set(() => ({ cart: [...filterdCart] }))
        }
    },
    clearCart: () => set({ cart: [] }),
}))

export const useEventStore = create((set) => ({
    eventItems: [],
    addEventItem: (eventItem) => set(() => ({ eventItems: eventItem })),
    getEvents: (addEventItem) => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then((response) => {
                addEventItem(response.data.events);
            })
            .catch(error => console.log(error))
    }
}))

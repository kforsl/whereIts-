# Individuell Examination Frontendramverk - Where It's @

![screen](./screen.png)

## Tekniker 

I den här uppgiften har jag använt mig av:  
- Pages & Components 
- useState & useEffect 
- Props 
- API-hantering med axios 
- Routing mellan Pages med react-router-dom 
- Avancerad statehantering med Zustand 

Jag har även använt mig utav ytterligare dessa externa bibliotek: 
- useParams, för att smidigt kunna hämta id från url.  
- swiper, för att kunna swipa mellan biljetter om du beställer mer än en biljett av ett event.  
- styled-components, för att styla de olika komponenter som jag skapat.  
- react-icons, för att smidigt kunna importera ikoner som ska användas.   

### swiper  

Jag valde att använda mig av swiper för att enkelt kunna implementera en swipe funktion på sidan. Jag valde att använda den för att kunna bläddra i en loop de biljetter av samma event som 'beställs' samtidigt. I swiper använde jag mig av  Swiper och SwiperSlide, Swiper är själva containern som swipas i och SwiperSlide är de objekt som swipas igenom.  
Utöver det så använde jag mig av Pagination för att få de prickar som ger indikation på hur många objekt som kan swipas igenom.  

### styled-components  

Jag valde att prova på att använda mig utav externa biblioteket för att se hur det är att jobba med jämfört med vanlig css.  
De olika saker som jag testade på var att använda mig av ThemeProvider där jag sparade färgerna och de fonter som skulle användas genom appen. Detta skulle jag säga motsvarar :root i vanlig css.  
Jag använde mig även av createGlobalStyle för att göra global styling på en del element som är samma över alla komponenter, där importerar jag även de fonter som jag laddade ner ttf-fil för.  
Sist använde jag mig av styled för att skapa separata styled-components där specifik styling för mina komponenter.  

### react-icons  

Jag valde att använda mig av biblioteket react-icons för att smidigt kunna importera de olika ikoner som jag skulle behöva använda mig av under projektet. Det var smidigt att leta bland dokumentationen för att hitta hur man skulle importera varje icon. Det var även smidigt att man kunde skicka med i den importerade komponenten vilken färg och storlek man vill ha på iconen. 

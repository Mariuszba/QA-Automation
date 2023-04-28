Feature: Pierwszy skrypt w Gherkin

    In Zakupy w ulubionym sklepie internetowym

    Scenario: Odwiedzenie sklepu internetowego
        Given W przeglądarce wpisany jest adres sklepu internetowego https://4f.com.pl/
        When  Ładowanie strony sklepu
        Then  Widzę załadowaną stronę sklepu internetowego

    Scenario: Wyszukiwanie produktu 
        Given Wpisanie w polu „Znajdź produkt ...” poszukiwany produkt
        When  Witryna internetowa ładuję listę pasujących produktów 
        Then  Widzę listę dopasowanych produktów wyszukiwarki

    Scenario: Dodanie produktu do koszyka
        Given Wybieram produkt
        When  Klikam wybrany produkt
        And   Klikam przycisk „DODAJ DO KOSZYKA”
        And   Klikam przycisk „POKAŻ KOSZYK”
        Then  Widzę produkt w koszyku

    Scenario: Zakup produktu
        Given Znajduję się w koszyku
        When  Klikam przycisk „PRZEJDŹ DO KASAY”
        And   Klikam przycisk „ZAMAWIAJ BEZ REJESTRACJI”
        And   Podaję dane do wysyłki
        And   Klikam przycisk „PRZEJDŹ DO PŁATNOŚCI”
        And   Klikam przycisk „ZAMAWIAM i PŁACĘ”
        Then  Widzę komunikat potwierdzający 
public class CurrencyConverter {
double oldCurrency;
double rate;


    public CurrencyConverter(double oldCurrency, double rate) {
        this.oldCurrency = oldCurrency;
        this.rate = rate;
    }

    double changeCurrency(){
        double newCurrency= oldCurrency * rate;
        return newCurrency;
    }

}

import com.Rates.Rates;

public class currency implements Rates {
    String typeofCurrency;
    double amount;

    public currency(String typeofCurrency, double amount) {
        this.typeofCurrency = typeofCurrency;
        this.amount=amount;

        new CurrencyConverter(amount,);
    }
}

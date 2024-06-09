import * as React from "react";
import './AppStats.css';
import {useNavigate} from "react-router-dom";

const AppStats = () => {
    const [accountID, setAccountID] = React.useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        let value = event.target.value;
        // Проверяем, является ли введенное значение числом
        if (!/^\d+$/.test(value)) {
            // Если нет, заменяем все нецифровые символы на пустую строку
            value = value.replace(/\D/g, '');
        }
        // Обновляем состояние с новым значением
        setAccountID(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (accountID.trim()!== '') {
            window.location.href = `/players/${accountID}`; // Принудительное перенаправление
        }
    };

    return (
        <main className="AppStats">
            <h1 className="AppStats-name">DotaStatic</h1>
            <h2 className="AppStats-description">Получите подробную статистику по своему аккаунту</h2>
            <form onSubmit={handleSubmit} className="AppStats__form">
                <div className="form__group field">
                    <input
                        type="text"
                        className="form__field"
                        placeholder="Account ID"
                        name="id"
                        id='id'
                        required
                        value={accountID}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="id" className="form__label">Введите ваш Account ID</label>
                </div>
                <button type="submit" className="AppStats__form-button">Отправить</button>
            </form>
            <button type="submit" className="AppStats__form-button previous" onClick={() => {
                navigate(-1)
            }}>Назад</button>
        </main>
    );
};

export default AppStats;

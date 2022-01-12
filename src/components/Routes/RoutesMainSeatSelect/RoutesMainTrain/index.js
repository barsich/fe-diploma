import images from '../../../../images';

function RoutesMainTrain({ direction }) {
  // TODO if (ticketsAmount > 4) ticketsAmount = 4
  // TODO if (ticketsAmount < 0 || !ticketsAmount) ticketsAmount = 0
  return (
    <div className={`train-detailed train-detailed_${direction}`}>
      <button
        className={`train-detailed__change-train train-detailed__change-train_${direction} btn btn_black-border`}
      >
        Выбрать другой поезд
      </button>
      <div className="train-detailed__info">
        <div className="train-detailed__info__train">
          <span className="train-detailed__info__train__train-number">116С</span>
          <span className="train-detailed__info__train__city-start">Адлер →</span>
          <span className="train-detailed__info__train__city-from">Москва →</span>
          <span className="train-detailed__info__train__city-to">Санкт-Петербург</span>
        </div>
        <div
          className={`train-detailed__info__direction train-detailed__info__direction_${direction}`}
        >
          <div className="train-detailed__info__direction__from">
            <span className="train-detailed__info__direction__time">00:10</span>
            <span className="train-detailed__info__direction__city">Москва</span>
            <span className="train-detailed__info__direction__railway-stantion">
              Курский вокзал
            </span>
          </div>
          <div className="train-detailed__info__direction__to">
            <span className="train-detailed__info__direction__time">09:52</span>
            <span className="train-detailed__info__direction__city">Санкт-Петербург</span>
            <span className="train-detailed__info__direction__railway-stantion">
              Ладожский вокзал
            </span>
          </div>
        </div>
        <div className="train-detailed__info__dutarion">
          <span>
            9 часов <br />
            42 минуты
          </span>
        </div>
      </div>
      <div className="train-detailed__tickets-amount">
        <h3 className="train-detailed__info__title">Количество билетов</h3>
        <div className="train-detailed__tickets-amount__adult train-detailed__tickets-amount__item">
          <div className="train-detailed__tickets-amount__input-wrapper">
            <label htmlFor="tickets-amount_adult" className="train-detailed__tickets-amount__label">
              Взрослых —
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="1"
              defaultValue="0"
              className="train-detailed__tickets-amount__input"
              id="tickets-amount_adult"
              name="tickets-amount_adult"
            />
          </div>
          <span className="train-detailed__tickets-amount__description">
            Можно добавить еще 4 пассажиров
          </span>
        </div>
        <div className="train-detailed__tickets-amount__child train-detailed__tickets-amount__item">
          <div className="train-detailed__tickets-amount__input-wrapper">
            <label htmlFor="tickets-amount_child" className="train-detailed__tickets-amount__label">
              Детских —
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="1"
              defaultValue="0"
              className="train-detailed__tickets-amount__input"
              id="tickets-amount_child"
              name="tickets-amount_child"
            />
          </div>
          <span className="train-detailed__tickets-amount__description">
            Можно добавить еще 4 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в
            среднем на 50-65%
          </span>
        </div>
        <div className="train-detailed__tickets-amount__child-free train-detailed__tickets-amount__item">
          <div className="train-detailed__tickets-amount__input-wrapper">
            <label
              htmlFor="tickets-amount_child-free"
              className="train-detailed__tickets-amount__label"
            >
              Детских «без места» —
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="1"
              defaultValue="0"
              className="train-detailed__tickets-amount__input"
              id="tickets-amount_child-free"
              name="tickets-amount_child-free"
            />
          </div>
        </div>
      </div>
      <div className="train-detailed__coach">
        <h3 className="train-detailed__info__title">Тип вагона</h3>
        <div className="train-detailed__coach__type">
          <div className="train-detailed__coach__type__fourth-class train-detailed__coach__type__item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 14 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 8.75332C0.141674 8.57341 0.25759 8.35008 0.437903 8.21981C1.03036 7.79796 1.79669 8.08953 1.97056 8.80294C2.12512 9.44812 2.25391 10.0995 2.38914 10.7509C2.62741 11.8737 2.85925 13.0028 3.10396 14.1256C3.42594 15.5835 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6567 10.4002 17.2026C10.5032 17.7919 10.0846 18.3379 9.46642 18.3441C8.03036 18.3565 6.5943 18.3937 5.15823 18.3317C3.39374 18.2572 1.75161 16.8552 1.29439 15.081C0.99816 13.9209 0.779209 12.7422 0.521619 11.576C0.354186 10.8005 0.173873 10.0313 0 9.25581C0 9.08831 0 8.92081 0 8.75332Z"
                fill="#E5E5E5"
              />
              <path
                d="M4.53991 0C5.04865 0.105461 5.51875 0.266754 5.92445 0.601748C6.76806 1.29655 7.02565 2.56829 6.49759 3.51123C5.92445 4.54103 4.72022 5.04972 3.61902 4.73334C2.52427 4.41696 1.86741 3.65392 1.7837 2.50625C1.7193 1.62534 2.20872 0.694802 3.2262 0.235737C3.45803 0.130275 3.71562 0.0806467 3.96677 0C4.15352 0 4.34671 0 4.53991 0Z"
                fill="#E5E5E5"
              />
              <path
                d="M11.3469 15.8749C11.1924 15.8749 11.0829 15.8749 10.9799 15.8749C9.33128 15.8749 7.68271 15.8811 6.02769 15.8749C4.7655 15.8687 3.91546 15.1987 3.67075 14.0076C3.24572 11.9853 2.82714 9.96289 2.40212 7.94052C1.97065 5.88713 3.88326 4.89456 5.25492 5.32261C6.13073 5.59557 6.58151 6.22833 6.76182 7.05341C7.12245 8.70977 7.46375 10.3661 7.79862 12.0225C7.85658 12.3203 7.95317 12.4319 8.28804 12.4257C9.62751 12.4133 10.967 12.4133 12.3064 12.4567C13.2144 12.4816 13.9164 13.1888 13.9808 14.0635C13.9937 14.2124 14.0001 14.3612 14.0001 14.5101C14.0001 16.8117 14.0001 19.107 14.0001 21.4085C14.0001 21.6132 14.0001 21.8242 13.955 22.0227C13.8133 22.6492 13.2466 23.0401 12.5833 22.9966C11.9329 22.9532 11.4242 22.4755 11.3598 21.8428C11.3469 21.6939 11.3469 21.545 11.3469 21.3961C11.3469 19.6777 11.3469 17.9531 11.3469 16.2347C11.3469 16.1293 11.3469 16.0176 11.3469 15.8749Z"
                fill="#E5E5E5"
              />
            </svg>
            <span>Сидячий</span>
          </div>
          <div className="train-detailed__coach__type__third-class train-detailed__coach__type__item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4651 0H1.53491C0.690674 0 0 0.689941 0 1.5332V15.4668C0 16.3101 0.690674 17 1.53491 17H6H7H15.4651C16.3093 17 17 16.3101 17 15.4668V1.5332C17 0.689941 16.3093 0 15.4651 0ZM7 16.0415H11.9536C12.1448 16.0415 12.3203 15.9707 12.4551 15.854C12.6179 15.7134 12.7212 15.5059 12.7212 15.2749H12.7021V13.895C12.7021 13.4736 12.3567 13.1284 11.9346 13.1284H7V16.0415ZM6 13.1284H5.04639C4.62427 13.1284 4.27881 13.4736 4.27881 13.895V15.2749C4.27881 15.6968 4.62427 16.0415 5.04639 16.0415H6V13.1284ZM2.24487 9.88965C1.9187 9.88965 1.65015 9.62109 1.65015 9.29541V4H4.56665V9.29541C4.56665 9.43213 4.51929 9.55908 4.44019 9.66016C4.38623 9.72852 4.31763 9.78516 4.23926 9.8252C4.15869 9.86621 4.06763 9.88965 3.97168 9.88965H2.24487ZM1.65015 2.06982V3H4.56665V2.06982C4.56665 1.74414 4.29785 1.47559 3.97168 1.47559H2.24487C1.9187 1.47559 1.65015 1.74414 1.65015 2.06982ZM12.2415 9.27637V4H15.1772V9.27637C15.1772 9.62109 14.8894 9.90869 14.5439 9.90869H12.8748C12.5293 9.90869 12.2415 9.62109 12.2415 9.27637ZM12.2415 3H15.1772V2.08887C15.1772 1.91943 15.1079 1.76416 14.9963 1.6499C14.8806 1.53125 14.7197 1.45654 14.5439 1.45654H12.8748C12.5293 1.45654 12.2415 1.74414 12.2415 2.08887V3Z"
                fill="#E5E5E5"
              />
            </svg>
            <span>Плацкарт</span>
          </div>
          <div className="train-detailed__coach__type__second-class train-detailed__coach__type__item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.53491 0H15.4651C16.3093 0 17 0.695312 17 1.54541V15.4546C17 16.3047 16.3093 17 15.4651 17H1.53491C0.690674 17 0 16.3047 0 15.4546V1.54541C0 0.695312 0.690674 0 1.53491 0ZM13.1243 2.125C12.7021 2.125 12.3567 2.47266 12.3567 2.89795V4H15.2922V2.89795C15.2922 2.47266 14.947 2.125 14.5249 2.125H13.1243ZM15.2922 5H12.3567V10.0454C12.3567 10.4702 12.7021 10.8184 13.1243 10.8184H14.5249C14.7654 10.8184 14.981 10.7056 15.1218 10.5293C15.2283 10.3965 15.2922 10.228 15.2922 10.0454V5ZM4.54736 4V2.9751C4.54736 2.51123 4.16357 2.125 3.70312 2.125H2.45605C1.99561 2.125 1.61182 2.51123 1.61182 2.9751V4H4.54736ZM1.61182 5H4.54736V9.9873C4.54736 10.1968 4.46924 10.3901 4.34131 10.5396C4.18555 10.7212 3.95581 10.8374 3.70312 10.8374H2.45605C2.29712 10.8374 2.14746 10.7915 2.01953 10.7119C1.77661 10.5615 1.61182 10.291 1.61182 9.9873V5ZM15.9873 16.5215C16.4189 16.2642 16.7122 15.791 16.7122 15.2422V12.4795H0.287842V15.2422C0.287842 16.0532 0.940186 16.7295 1.76514 16.7295H15.2349C15.5081 16.7295 15.7659 16.6538 15.9873 16.5215Z"
                fill="#E5E5E5"
              />
            </svg>
            <span>Купе</span>
          </div>
          <div className="train-detailed__coach__type__first-class train-detailed__coach__type__item">
            <svg
              width="50"
              height="50"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0L13.5857 7.63103H22L15.2072 12.369L17.7928 20L11 15.304L4.20717 20L6.79283 12.369L0 7.63103H8.41434L11 0Z"
                fill="#E5E5E5"
              />
            </svg>
            <span>Люкс</span>
          </div>
        </div>
        <div className="train-detailed__coach__seats">
          <div className="train-detailed__coach__seats__coaches">
            <div className="train-detailed__coach__seats__coaches__avaliable">
              <span>Вагоны</span>
              <button className="train-detailed__coach__seats__coaches__avaliable__number train-detailed__coach__seats__coaches__avaliable__number_active">
                10
              </button>
              <button className="train-detailed__coach__seats__coaches__avaliable__number">
                12
              </button>
              <button className="train-detailed__coach__seats__coaches__avaliable__number">
                15
              </button>
              <span>Нумерация вагонов начинается с головы состава</span>
            </div>
            <div className="train-detailed__coach__seats__coaches__info">
              <div className="train-detailed__coach__seats__coaches__info__number">
                <span>10</span>
                <span>вагон</span>
              </div>
              <div className="train-detailed__coach__seats__coaches__info__seats train-detailed__coach__seats__coaches__info__item">
                <div className="seats-info__row">
                  <span className="seats-info__title">Места</span>
                  <span className="seats-info__seats-total">21</span>
                </div>
                <div className="seats-info__row">
                  <span className="seats-info__type">Верхние</span>
                  <span className="seats-info__amount">10</span>
                </div>
                <div className="seats-info__row">
                  <span className="seats-info__type">Нижние</span>
                  <span className="seats-info__amount">11</span>
                </div>
              </div>
              <div className="train-detailed__coach__seats__coaches__info__price train-detailed__coach__seats__coaches__info__item">
                <div className="seats-info__row">
                  <span className="seats-info__title">Стоимость</span>
                </div>
                <div className="seats-info__row">
                  <span className="seats-info__price">2 020</span>
                  {/* <span className="seats-info__rouble-symbol"></span> */}
                </div>
                <div className="seats-info__row">
                  <span className="seats-info__price">3 030</span>
                  {/* <span className="seats-info__rouble-symbol"></span> */}
                </div>
              </div>
              <div className="train-detailed__coach__seats__coaches__info__services train-detailed__coach__seats__coaches__info__item">
                <div className="seats-info__row">
                  <span className="seats-info__title">Обслуживание</span>
                  <span className="seats-info__service-company">ФПК</span>
                </div>
                <div className="seats-info__row">
                  <div className="seats-info__services">
                    <div className="seats-info__services__item seats-info__services__conditioner">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.0993 11.641C7.71469 11.8691 7.35884 12.0788 7.00299 12.2885C6.38474 12.6527 5.77369 13.0205 5.15184 13.3774C5.02963 13.4473 4.9865 13.5319 4.97931 13.6643C4.93258 14.3964 4.87867 15.1321 4.82834 15.8642C4.79959 16.2946 4.49406 16.5889 4.08788 16.5742C3.69249 16.5595 3.40134 16.2284 3.41572 15.798C3.4301 15.4632 3.45526 15.1248 3.47683 14.79C3.48402 14.6576 3.4912 14.5251 3.49839 14.3633C3.39056 14.4258 3.30789 14.47 3.22521 14.5178C2.68245 14.8378 2.13969 15.1616 1.59333 15.4816C1.31296 15.6435 0.989462 15.603 0.759416 15.3897C0.547343 15.1947 0.453887 14.8489 0.590477 14.584C0.66596 14.4369 0.795361 14.2934 0.935545 14.2051C1.49269 13.8556 2.06061 13.5319 2.62494 13.1971C2.67526 13.1677 2.72558 13.1346 2.79388 13.0941C2.36973 12.8807 1.96715 12.6821 1.56457 12.4798C1.21232 12.2995 1.05776 11.9537 1.1584 11.5969C1.28061 11.1738 1.73351 10.9604 2.13969 11.1554C2.80107 11.4718 3.45526 11.8029 4.10945 12.134C4.23526 12.2002 4.33231 12.1965 4.45452 12.1229C5.3747 11.5711 6.29848 11.0303 7.21866 10.4859C7.26898 10.4564 7.3193 10.4233 7.39479 10.3755C7.1935 10.2578 7.01018 10.1474 6.82686 10.0407C6.03968 9.57354 5.24889 9.11369 4.4653 8.63913C4.32871 8.55452 4.22447 8.56188 4.08788 8.63177C3.45167 8.95918 2.81185 9.27556 2.16844 9.58825C1.78743 9.77587 1.37766 9.63975 1.20153 9.27556C1.01822 8.904 1.16559 8.48462 1.5502 8.28597C1.90245 8.10203 2.25831 7.92913 2.61056 7.74887C2.66448 7.72312 2.7148 7.69369 2.78669 7.65322C2.24393 7.33317 1.72273 7.02415 1.20153 6.71514C1.10448 6.65628 1.00384 6.6011 0.906789 6.53856C0.547343 6.31783 0.428726 5.89478 0.622827 5.54161C0.820522 5.18477 1.24826 5.07073 1.61849 5.2841C2.20079 5.62255 2.7795 5.96835 3.35821 6.31047C3.39415 6.33255 3.4301 6.35094 3.49839 6.39141C3.47683 6.03457 3.45885 5.71084 3.44088 5.38343C3.4301 5.22892 3.41572 5.07809 3.41213 4.92358C3.40494 4.51892 3.69249 4.19519 4.07351 4.17679C4.47249 4.1584 4.7924 4.44534 4.82115 4.85736C4.87507 5.60783 4.92899 6.36198 4.97572 7.11244C4.9829 7.23752 5.02963 7.30742 5.13747 7.36628C6.06843 7.91074 6.99221 8.45887 7.91958 9.00701C7.9699 9.03644 8.02022 9.06587 8.09571 9.10633C8.0993 9.0254 8.10649 8.96654 8.10649 8.91136C8.10649 7.81509 8.10289 6.71514 8.11008 5.61887C8.11008 5.48643 8.06695 5.40918 7.95912 5.3356C7.35165 4.9199 6.74419 4.5042 6.14392 4.08115C5.68742 3.76109 5.72336 3.08788 6.20502 2.83405C6.46023 2.70161 6.71543 2.72368 6.95267 2.88555C7.27617 3.10627 7.59967 3.327 7.92317 3.54773C7.9699 3.58083 8.02022 3.61394 8.10649 3.66912C8.10649 3.57348 8.10649 3.50726 8.10649 3.44472C8.10649 2.78254 8.10289 2.12037 8.10649 1.45819C8.11008 0.957879 8.48031 0.62679 8.93321 0.704044C9.24953 0.755547 9.49036 1.02778 9.51552 1.35886C9.51911 1.40669 9.51552 1.45819 9.51552 1.50601C9.51552 7.41778 9.51552 13.3259 9.51552 19.2376C9.51552 19.6349 9.34658 19.9145 9.03745 20.0175C8.56658 20.1794 8.10649 19.8373 8.1029 19.3149C8.0993 18.6454 8.1029 17.9795 8.1029 17.31C8.1029 17.2438 8.1029 17.1812 8.1029 17.0708C7.85128 17.2438 7.63202 17.3909 7.41635 17.5381C7.26179 17.6447 7.11082 17.7514 6.95267 17.8544C6.58963 18.0972 6.16189 18.0236 5.93903 17.6815C5.70899 17.332 5.80604 16.8943 6.17267 16.6404C6.77295 16.2247 7.37322 15.8127 7.9699 15.3933C8.03101 15.3492 8.09571 15.2535 8.09571 15.1836C8.1029 14.0432 8.10289 12.9028 8.0993 11.7624C8.11008 11.7366 8.10649 11.7072 8.0993 11.641Z"
                          fill="#292929"
                        />
                        <path
                          d="M19.1595 5.619C18.9474 5.87652 18.7137 6.11564 18.5268 6.38787C18.2536 6.79253 17.9697 7.20455 17.7648 7.64968C17.4161 8.40383 17.6102 9.11015 18.2501 9.62885C18.8324 10.1034 19.5153 10.3609 20.2198 10.5706C20.3025 10.5964 20.3888 10.6184 20.4211 10.6295C19.8496 10.887 19.2529 11.1482 18.6634 11.4278C18.4873 11.5124 18.3255 11.6411 18.1746 11.7699C17.621 12.2371 17.4485 12.8478 17.6749 13.5504C17.8619 14.139 18.2141 14.6246 18.5987 15.0881C18.7641 15.2868 18.9438 15.4744 19.1487 15.6988C18.8935 15.6473 18.6778 15.5958 18.4585 15.559C17.8906 15.4634 17.3227 15.3861 16.744 15.456C15.9208 15.559 15.3925 16.0777 15.2774 16.9165C15.1696 17.7111 15.3062 18.48 15.5003 19.2415C15.5111 19.2819 15.5183 19.3224 15.5398 19.4033C15.3421 19.2231 15.1768 19.0649 15.0043 18.9177C14.5657 18.5425 14.1128 18.193 13.588 17.9576C12.7649 17.5897 12.0496 17.792 11.5212 18.5388C11.1402 19.0759 10.9066 19.6829 10.7197 20.312C10.7017 20.3672 10.6873 20.426 10.6514 20.4738C10.6514 19.2562 10.6514 18.0422 10.6514 16.8098C12.5744 16.7436 14.156 15.9674 15.3565 14.4296C16.2587 13.2708 16.6901 11.9354 16.6505 10.4529C16.5643 7.06844 13.7965 4.41973 10.6586 4.43812C10.6586 3.16527 10.6586 1.89242 10.6586 0.579102C10.6873 0.656356 10.7053 0.700501 10.7161 0.744646C10.9389 1.46568 11.2013 2.16833 11.6434 2.78268C12.1574 3.49268 12.844 3.68765 13.642 3.34553C14.289 3.06962 14.8245 2.63185 15.3206 2.13522C15.3889 2.06532 15.4572 1.9991 15.5255 1.92921C15.5326 1.92185 15.547 1.92185 15.5614 1.91817C15.4967 2.28605 15.4068 2.65024 15.3781 3.01812C15.3421 3.49268 15.3134 3.9746 15.3601 4.44548C15.4392 5.24377 15.9748 5.75144 16.7584 5.8618C17.5024 5.96481 18.2249 5.84341 18.9438 5.65579C19.0085 5.6374 19.0696 5.62268 19.1343 5.60797C19.1379 5.60797 19.1451 5.61165 19.1595 5.619Z"
                          fill="#292929"
                        />
                        <path
                          d="M10.655 15.5333C10.655 12.2666 10.655 8.99614 10.655 5.69629C12.3624 5.77722 13.7427 6.47986 14.6521 7.95505C15.752 9.73925 15.7268 11.5749 14.6233 13.3555C13.5594 15.0624 11.701 15.6069 10.655 15.5333Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div className="seats-info__services__item seats-info__services__wifi">
                      <svg
                        width="24"
                        height="19"
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 5.05721C23.7201 5.32164 23.4402 5.58607 23.1683 5.85852C22.8964 6.13096 22.6405 6.41944 22.3525 6.73195C19.4335 3.90332 16.0027 2.41289 11.988 2.41289C7.98934 2.41289 4.57448 3.90332 1.73542 6.65182C1.16761 6.0909 0.623792 5.54601 0 4.92099C0.863712 4.24789 1.70343 3.48664 2.63912 2.86162C9.3009 -1.56161 17.89 -0.792353 23.6961 4.72066C23.7921 4.8088 23.896 4.88893 24 4.96906C24 5.00112 24 5.02516 24 5.05721Z"
                          fill="#292929"
                        />
                        <path
                          d="M11.6041 18.9998C11.5001 18.9517 11.3961 18.8956 11.2842 18.8476C10.4365 18.487 9.96461 17.5975 10.1406 16.692C10.3165 15.7946 11.1082 15.1455 12.0279 15.1455C12.9396 15.1535 13.7314 15.8106 13.8993 16.7081C14.0672 17.6055 13.5794 18.495 12.7237 18.8476C12.6117 18.8956 12.5078 18.9437 12.3958 18.9918C12.1319 18.9998 11.868 18.9998 11.6041 18.9998Z"
                          fill="#292929"
                        />
                        <path
                          d="M5.11028 10.0414C4.54247 9.48046 3.99865 8.94359 3.45483 8.39869C7.58946 3.91136 15.6108 3.31839 20.5371 8.35062C19.9853 8.89551 19.4255 9.4404 18.8577 10.0013C16.9863 8.20638 14.6911 7.19673 11.988 7.20474C9.29289 7.21276 7.00565 8.21439 5.11028 10.0414Z"
                          fill="#292929"
                        />
                        <path
                          d="M17.2023 11.7721C16.6344 12.333 16.0906 12.8779 15.5468 13.4148C13.4115 11.3955 10.3325 11.6118 8.48516 13.4068C7.94134 12.8619 7.39752 12.325 6.8457 11.7801C9.03697 9.20791 14.0673 8.55885 17.2023 11.7721Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div className="seats-info__services__item seats-info__services__linens">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.545 12.1613C20.6815 12.5772 20.8553 13.1645 21.0538 13.7395C21.3641 14.6815 20.7312 15.6235 19.7259 15.6235C14.4764 15.6357 9.21447 15.6357 3.96494 15.6113C2.19028 15.599 0.936843 14.7304 0.651408 13.2256C0.514895 12.5283 0.589357 11.7575 0.725869 11.0602C1.17264 8.68681 1.69387 6.32564 2.20269 3.95225C2.28956 3.53629 2.42607 3.12033 2.61222 2.74108C2.99694 1.9581 3.56781 1.43204 4.5234 1.28523C5.33007 1.16289 6.11191 0.857043 6.89375 0.600129C7.39016 0.428853 7.84934 0.404385 8.30852 0.698001C9.15242 1.24853 10.0708 1.38311 11.076 1.35864C13.3098 1.3097 15.5437 1.3464 17.7775 1.35864C18.5718 1.35864 18.5718 1.37087 18.7952 2.10491C19.0806 3.08363 19.3536 4.06235 19.6515 5.04107C19.7259 5.26129 19.8873 5.45703 20.0238 5.65277C20.334 6.08096 20.7436 6.44798 20.9421 6.91288C21.4758 8.13628 21.4882 9.45755 21.3393 10.7666C21.2896 11.1948 20.8925 11.574 20.545 12.1613ZM1.63182 10.1794C2.72392 9.33521 3.87807 9.27404 5.06945 9.28627C9.78534 9.29851 14.5012 9.28627 19.2047 9.29851C19.6639 9.29851 20.1355 9.35968 20.7312 9.39638C20.6195 8.72351 20.5574 8.09958 20.3961 7.50011C20.0486 6.20331 19.1923 5.70171 17.8644 6.03203C16.946 6.26448 16.0153 6.50916 15.1714 6.90064C12.6521 8.06287 10.0335 7.87936 7.40257 7.54905C7.11714 7.51234 7.00545 7.36554 7.04268 7.09639C7.07991 6.79054 7.11714 6.49692 7.14196 6.19107C7.21642 5.11448 7.30329 4.03789 7.36534 2.96129C7.39016 2.423 7.36534 1.87247 7.36534 1.24853C7.10473 1.33417 6.89375 1.39534 6.68278 1.45651C5.96299 1.65225 5.2556 1.8847 4.53581 2.03151C3.95253 2.14161 3.54299 2.43523 3.31961 2.94906C3.14586 3.34055 3.00935 3.74427 2.91007 4.16023C2.72392 4.9065 2.5874 5.66501 2.42607 6.42352C2.17787 7.63468 1.91725 8.83362 1.63182 10.1794ZM11.6593 14.9139C14.2034 14.9139 16.7475 14.9139 19.2916 14.9139C19.4529 14.9139 19.6267 14.9262 19.788 14.9017C20.1479 14.8527 20.4457 14.498 20.3961 14.1676C20.3464 13.8251 20.1355 13.6293 19.7632 13.6416C19.6018 13.6416 19.4281 13.6416 19.2668 13.6416C14.4888 13.6538 9.71088 13.666 4.93294 13.666C4.6475 13.666 4.34966 13.6905 4.06422 13.6538C3.46853 13.5926 3.03417 13.0788 3.04658 12.4671C3.05899 11.8799 3.4313 11.4884 4.05181 11.4517C4.68473 11.415 5.33007 11.3783 5.9754 11.3661C10.5424 11.3171 15.1093 11.2804 19.6763 11.2315C19.7756 11.2315 19.8873 11.2315 19.9865 11.2192C20.3464 11.1825 20.6443 10.9012 20.6567 10.6075C20.6567 10.2161 20.3713 10.0937 20.061 10.0081C19.9245 9.97138 19.7756 9.97138 19.6267 9.97138C14.4392 9.97138 9.23929 9.95915 4.05181 9.99585C3.51817 9.99585 2.9473 10.1916 2.47571 10.4485C0.998894 11.2682 0.874792 13.4091 2.20269 14.3634C2.74874 14.7549 3.40648 14.8772 4.07663 14.8772C6.60832 14.9139 9.14001 14.9139 11.6593 14.9139ZM8.14719 1.46874C8.0355 3.32831 7.9238 5.09001 7.81211 6.81501C11.1629 7.54905 14.191 6.79054 17.0826 5.37139C14.0172 4.45384 11.2001 2.85119 8.14719 1.46874ZM19.7135 11.9655C19.4529 11.9655 19.2295 11.9655 18.9937 11.9655C17.1322 11.99 15.2707 12.0389 13.4091 12.0512C10.5424 12.0756 7.6756 12.0756 4.79643 12.1001C4.54822 12.1001 4.28761 12.1001 4.06422 12.1857C3.94012 12.2347 3.77879 12.4426 3.7912 12.565C3.80361 12.6996 3.96494 12.8708 4.10145 12.9442C4.21314 13.0054 4.38689 12.9687 4.5234 12.9687C9.52472 12.9565 14.5385 12.9565 19.5398 12.9442C19.6887 12.9442 19.8376 12.9075 20.0114 12.8953C19.9493 12.6873 19.9121 12.5283 19.8624 12.3692C19.8252 12.2469 19.7756 12.1368 19.7135 11.9655ZM11.3242 2.06821C11.3118 2.10491 11.3118 2.15385 11.2994 2.19055C13.7318 3.35278 16.1518 4.53948 18.9193 5.11448C18.6462 4.14799 18.4104 3.24267 18.1126 2.36183C18.063 2.21502 17.7651 2.08044 17.579 2.08044C15.494 2.06821 13.4091 2.06821 11.3242 2.06821Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                    <div className="seats-info__services__item seats-info__services__lunch">
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.39887 0.526367C2.65965 0.526367 2.84931 0.526367 3.03897 0.526367C7.78042 0.526367 12.5219 0.526367 17.2633 0.526367C18.745 0.526367 19.4681 1.25024 19.4681 2.75733C19.4681 3.56428 19.48 4.38309 19.4681 5.19003C19.4562 6.37671 18.6739 7.15992 17.5004 7.17179C16.9077 7.18366 16.3269 7.17179 15.6868 7.17179C15.6868 8.0974 15.6868 8.95182 15.6868 9.81809C15.6749 12.1915 14.0747 13.8053 11.7158 13.8172C9.93778 13.8172 8.15973 13.8291 6.38169 13.8172C4.04652 13.8053 2.42258 12.2033 2.42258 9.87743C2.38702 6.78019 2.39887 3.70668 2.39887 0.526367ZM15.7223 2.43693C15.7223 3.36254 15.7223 4.30002 15.7223 5.2375C16.3387 5.2375 16.9314 5.2375 17.5241 5.2375C17.5241 4.28815 17.5241 3.36254 17.5241 2.43693C16.9077 2.43693 16.3387 2.43693 15.7223 2.43693Z"
                          fill="#292929"
                        />
                        <path
                          d="M17.5363 15.7515C17.5363 16.3685 17.5363 16.9619 17.5363 17.579C11.8584 17.579 6.20426 17.579 0.526367 17.579C0.526367 16.9619 0.526367 16.3804 0.526367 15.7515C6.18055 15.7515 11.8347 15.7515 17.5363 15.7515Z"
                          fill="#292929"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="train-detailed__coach__seats-selector"></div>
      </div>
    </div>
  );
}

export default RoutesMainTrain;

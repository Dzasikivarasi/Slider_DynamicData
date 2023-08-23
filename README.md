Техническое задание по реализации слайдера

1. Должна быть возможность пролистывать фото. Например, добавить 2 кнопки вперед и назад (предыдущее, следующее и так далее);
2. При клике «назад» на первом фото должно открываться последнее. При клике «вперед» на последнем фото должно открываться первое;
3. Блок, в котором располагаются изображения, не должен меняться под размер картинок;
4. Добавить анимацию при переключении фото;
5. На входе — массив изображений. Их может быть любое количество. Нельзя завязываться на порядковый номер элемента;
Картинки можно положить в папку asset. Либо использовать стороннее API, сделав GET запрос для получения изображений;
6. Соблюдать семантическую верстку;
7. Использовать селекторы по тегу для задания стилей нельзя. Использовать классы. В случае, когда есть необходимость — селектор по id;
8. Дизайн произвольный. Минимум — застилизовать кнопки (добавить hover) и обеспечить для них accessibility: переключение по tab, outline, cursor.
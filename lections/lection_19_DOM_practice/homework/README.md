# Изучить материал
+ https://learn.javascript.ru/keyboard-events
+ https://learn.javascript.ru/multi-insert

+ https://learn.javascript.ru/attributes-and-custom-properties
+ https://learn.javascript.ru/traversing-dom
+ https://learn.javascript.ru/events-and-timing-depth
+ https://learn.javascript.ru/obtaining-event-object
+ https://learn.javascript.ru/mouse-clicks
+ https://learn.javascript.ru/mousemove-mouseover-mouseout-mouseenter-mouseleave


# Лекция
W
1) Создать контекстное меню  при клике(event=contextmenu) на любое место в документе. Использую модель данных ниже(data):

		data = { 
			name: 'menu', 
			type: 'row|column', 
			items: [
				{
					title: 'title 1',
					handler: 'ActionCopy'
				},
				{
					title: 'title 2',
					handler: 'ActionSaveAs'
				},
				{
					title: 'title 3',
					handler: 'ActionExit' // названия метода из actions
				}
			]
		}

2) Меотоды обработчиков событий хранить в объекте actions. 
3)Кликая(onclick) по пунктам меню(задание #1), вызываются метод из объекта actions (использовать своство handler) .


actions = {
	ActionCopy: function(){},
	ActionSaveAs: function(){},
	ActionExit: function() {}
}

actions[item.handler]

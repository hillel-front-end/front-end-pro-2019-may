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

1) 
		data = { 
			name: 'menu', 
			type: 'row|column', 
			items: [
				{
					title: 'title 1',
					handler: 'ActionAdd'
				},
				{
					title: 'title 2',
					handler: 'ActionSaveAs'
					items: [
						{ title: 'inner 1' }, { title: 'inner 2' }
					]
				},
				{
					title: 'title 3',
					handler: 'ActionExit'
				}
			]
		}

Создать вертикальное или горизонтальное (в зависимости от свойства type) меню, в котором будут элементы из свойства items.



2) Inner items - выпадающее меню.



3) hander - хранит название функции, которая выполнится при нажатии на пункт меню.
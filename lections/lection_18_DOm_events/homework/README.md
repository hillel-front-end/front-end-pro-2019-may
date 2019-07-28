# Изучить материал
+ https://learn.javascript.ru/keyboard-events
+ https://learn.javascript.ru/multi-insert
+ https://learn.javascript.ru/event-bubbling
+ https://learn.javascript.ru/event-delegation
+ https://learn.javascript.ru/behavior


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
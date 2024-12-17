const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Tilemap,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Behaviors.Car,
		C3.Behaviors.solid,
		C3.Behaviors.Pin,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Behaviors.Car.Acts.SetAcceleration,
		C3.Behaviors.Car.Acts.SetMaxSpeed,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.Pin.Acts.PinByImagePoint
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Roads: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Car: 0},
	{Solid: 0},
	{Bush: 0},
	{Pin: 0},
	{Lights: 0},
	{Pitstop: 0},
	{House: 0},
	{backOfHouse: 0},
	{Lightpost: 0},
	{lightJ: 0},
	{Cone: 0},
	{Stands: 0},
	{stand: 0},
	{concrete: 0},
	{line: 0},
	{democar: 0},
	{StartLine: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Roads: class extends self.ITilemapInstance {},
	Car: class extends self.ISpriteInstance {},
	Bush: class extends self.ISpriteInstance {},
	Lights: class extends self.ISpriteInstance {},
	Pitstop: class extends self.ISpriteInstance {},
	House: class extends self.ISpriteInstance {},
	backOfHouse: class extends self.ISpriteInstance {},
	Lightpost: class extends self.ISpriteInstance {},
	lightJ: class extends self.ISpriteInstance {},
	Cone: class extends self.ISpriteInstance {},
	Stands: class extends self.ISpriteInstance {},
	stand: class extends self.ISpriteInstance {},
	concrete: class extends self.ISpriteInstance {},
	line: class extends self.ISpriteInstance {},
	democar: class extends self.ISpriteInstance {},
	StartLine: class extends self.ISpriteInstance {}
}
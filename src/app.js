
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var rootNode = UIHelper.bindUIWidget(this, res.test_json_file);
        this.addChild(rootNode);

        this._testImage.setScale(2);
        this._testText.setString("hello world");
        return true;
    },

    _onConfirmButtonTouched: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED == type) {
            console.log("_onConfirmButtonTouched");
        }
    },

    _onCancelButtonTouched: function (sender, type) {
        if (ccui.Widget.TOUCH_ENDED == type) {
            console.log("_onCancelButtonTouched");
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});


//=============================================================================
// WASD_Movement.js
//=============================================================================

/*:
 * @plugindesc 添加WASD键控制角色移动
 * @author Copilot
 *
 * @help
 * 这个插件允许玩家使用WASD键来控制角色移动：
 * W - 向上移动
 * A - 向左移动
 * S - 向下移动
 * D - 向右移动
 * 
 * 方向键依然可以正常使用
 */

(function() {
    // 保存原始的按键检查方法
    var _Input_onKeyDown = Input._onKeyDown;
    var _Input_onKeyUp = Input._onKeyUp;
    
    // 重新定义按键映射
    Input.keyMapper = {
        9: 'tab',
        13: 'ok',
        16: 'shift',
        17: 'control',
        18: 'control',
        27: 'escape',
        32: 'ok',
        33: 'pageup',
        34: 'pagedown',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        45: 'escape',
        81: 'pageup',
        87: 'up',     // W键
        65: 'left',   // A键
        83: 'down',   // S键
        68: 'right',  // D键
        69: 'pagedown',
        75: 'ok',
        77: 'menu',
        80: 'menu',
        88: 'escape',
        90: 'ok',
        96: 'escape',
        98: 'down',
        100: 'left',
        102: 'right',
        104: 'up',
        120: 'debug'
    };

    // 重新定义按键按下事件
    Input._onKeyDown = function(event) {
        _Input_onKeyDown.call(this, event);
    };

    // 重新定义按键抬起事件
    Input._onKeyUp = function(event) {
        _Input_onKeyUp.call(this, event);
    };
})();
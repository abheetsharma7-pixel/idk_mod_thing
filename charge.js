// charge_tools.js

tools.positive_charge = {
    name: "Positive Charge",
    description: "Adds positive electrical charge",
    icon: "⚡+",
    tool: function(pixel) {
        if (!pixel) return;
        chargePixel(pixel, 1);
    }
};

tools.negative_charge = {
    name: "Negative Charge",
    description: "Adds negative electrical charge",
    icon: "⚡−",
    tool: function(pixel) {
        if (!pixel) return;
        chargePixel(pixel, -1);
    }
};
package com.mock;
import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;
// import com.facebook.react.ReactActivity;
 import com.reactnativenavigation.controllers.SplashActivity;

//  public class MainActivity extends ReactActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     @Override
//     protected String getMainComponentName() {
//         return "mock";
//     }
//     return
// }

 public class MainActivity extends SplashActivity {
 	  @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);

        view.setBackgroundColor(Color.parseColor("#607D8B"));
        view.setGravity(Gravity.CENTER);

        textView.setTextColor(Color.parseColor("#FFFFFF"));
        textView.setText("Mock ");
        textView.setGravity(Gravity.CENTER);
        textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

        view.addView(textView);
        return view;
    }
 }

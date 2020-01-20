package com.sakstest;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;
//import com.facebook.CallbackManager;

public class MainActivity extends ReactActivity {
//  private CallbackManager fbCallback;

//  @Override
//  public void onCreate(Bundle savedInstanceState) {
//    super.onCreate(savedInstanceState);
//    FacebookSdk.sdkInitialize(this.getApplicationContext());
//    setContentView(R.layout.activity_main);
//    callbackManager = CallbackManager.Factory.create();
//  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "SAKSTest";
  }

  public void onActivityResult(int requestCode, int resultCode, Intent data){
    super.onActivityResult(requestCode, resultCode,data );
    MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode,data)
  }
}

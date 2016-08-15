// lib imports
import * as application from 'application';
import * as platform from 'platform';

export const setStatusBarColors = () => {
  // Make the iOS status bar transparent with white text.
  // See https://github.com/burkeholland/nativescript-statusbar/issues/2
  // for details on the technique used.
  if (application.ios) {
    const AppDelegate = UIResponder.extend({
      applicationDidFinishLaunchingWithOptions: () => {
        UIApplication.sharedApplication().statusBarStyle =
          (UIStatusBarStyle as any).LightContent;

        return true;
      }
    }, {
      name: 'AppDelegate',
      protocols: [UIApplicationDelegate]
    });

    application.ios.delegate = AppDelegate;
  }

  // Make the Android status bar transparent.
  // See http://goo.gl/drgllz
  // for details on the technique used.
  if (application.android) {
    application.android.onActivityStarted = () => {
      if (application.android && platform.device.sdkVersion >= '21') {
        const View = android.view.View;
        const window = application.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        const decorView = window.getDecorView();
        decorView
          .setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                                 View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                                 View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN |
                                 (View as any).SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    };
  }
};

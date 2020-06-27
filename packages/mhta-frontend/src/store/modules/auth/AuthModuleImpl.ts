import { MutationTree, ActionTree, GetterTree, Module } from "vuex";
import ow from "ow";

import { AuthModule as Me, AuthModule } from "./AuthModule";
import { FirebaseAuthHelper } from "./FirebaseAuthHelper";

export namespace AuthModuleImpl {
  /**
   * State
   */
  export const state: Me.State = {
    state: AuthModule.AuthState.LOADING,
    profileImageURL: undefined,
    username: undefined
  };
  Me.validateState(state);

  /**
   * Mutations
   */
  // do not export as these mutations are private
  class Mutations {
    public static setUser = Me.localName("setUser");
    public static resetUser = Me.localName("resetUser");
    public static setState = Me.localName("setState");
  }

  const mutations: MutationTree<Me.State> = {
    [Mutations.setUser](state: Me.State, payload: { user: FirebaseAuthHelper.User }) {
      ow(payload.user, ow.object.label("payload.user"));
      const user = payload.user;
      state.username = user.displayName ? user.displayName : "";
      state.profileImageURL = user.photoURL ? user.photoURL : "";
      Me.validateState(state);
    },

    [Mutations.resetUser](state: Me.State) {
      state.username = undefined;
      state.profileImageURL = undefined;
      Me.validateState(state);
    },

    [Mutations.setState](state: Me.State, payload: { state: Me.AuthState }) {
      ow(
        payload.state,
        ow.string
          .oneOf([Me.AuthState.LOADING, Me.AuthState.AUTHENTICATED, Me.AuthState.NOTAUTHENTICATED])
          .label("payload.state")
      );
      state.state = payload.state;
      Me.validateState(state);
    }
  };

  /**
   * Actions
   */
  const actions: ActionTree<Me.State, Me.State> = {
    [Me.Actions.initialize]: ({ commit, dispatch, state }): void => {
      commit(Mutations.setState, { state: Me.AuthState.LOADING });
      FirebaseAuthHelper.initialize({
        authenticatedCb: user => {
          console.log("Authenticated user", user);
          commit(Mutations.setUser, { user: user as FirebaseAuthHelper.User });
          commit(Mutations.setState, { state: Me.AuthState.AUTHENTICATED });
        },
        notAuthenticatedCb: () => {
          console.log("User not authenticated");
          commit(Mutations.setState, { state: Me.AuthState.NOTAUTHENTICATED });
        }
      });
    },
    [Me.Actions.logout]: ({ commit, dispatch, state }): void => {
      commit(Mutations.setState, { state: Me.AuthState.LOADING });
      (async () => {
        await FirebaseAuthHelper.signOut();
        commit(Mutations.resetUser);
        commit(Mutations.setState, { state: Me.AuthState.NOTAUTHENTICATED });
      })();
    }
  };

  /**
   * Getters
   */
  const getters: GetterTree<Me.State, Me.State> = {
    [Me.Getters.isAuthenticated]: (state: Me.State): boolean => state.state === Me.AuthState.AUTHENTICATED,
    [Me.Getters.isNotAuthenticated]: (state: Me.State): boolean => state.state === Me.AuthState.NOTAUTHENTICATED
  };

  /**
   * Module
   */
  export const module: Module<Me.State, any> = {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
  };
}
